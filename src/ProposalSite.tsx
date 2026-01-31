import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import bgMusic from "./assets/AUD-20260130-WA0014.mp3";
import BirthdayCountdown from "./components/BirthdayCountdown";
import { messages, noButtonTexts, sharedMemories } from "./data/messages";
import { useBirthdayCountdown } from "./hooks/useBirthdayCountdown";
import "./styles/animations.css";
import { createConfettiPieces } from "./utils/confetti";

const ProposalSite = () => {
  const [started, setStarted] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [flashBars, setFlashBars] = useState(Array(14).fill(true));
  const [step, setStep] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [noClickCount, setNoClickCount] = useState(0);
  const [petals, setPetals] = useState<
    Array<{ id: number; left: number; delay: number }>
  >([]);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showMemory, setShowMemory] = useState(false);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [confetti, setConfetti] = useState<
    Array<{
      id: number;
      left: number;
      delay: number;
      duration: number;
      rotation: number;
      color: string;
      shape: string;
    }>
  >([]);
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    petals: THREE.Mesh[];
  } | null>(null);

  const createBirthdayConfetti = useCallback(() => {
    const confettiPieces = createConfettiPieces(150);
    setConfetti(confettiPieces);

    const confettiInterval = setInterval(() => {
      const newConfetti = createConfettiPieces(50).map((piece, i) => ({
        ...piece,
        id: Date.now() + i,
        delay: 0,
      }));
      setConfetti((prev) => [...prev, ...newConfetti]);

      setTimeout(() => {
        setConfetti((prev) =>
          prev.filter((c) => !newConfetti.find((nc) => nc.id === c.id))
        );
      }, 5000);
    }, 2000);

    setTimeout(() => clearInterval(confettiInterval), 60000);
  }, []);

  const { timeUntilBirthday, isBirthday } = useBirthdayCountdown(
    createBirthdayConfetti
  );

  const handleStart = async () => {
    setShowFlash(true);

    const audio = new Audio(bgMusic);
    audio.volume = 0.15;
    audio.loop = true;
    audio.play().catch((err) => console.log("Audio play failed:", err));

    try {
      await document.documentElement.requestFullscreen();
    } catch (err) {
      console.log("Fullscreen not supported");
    }

    // Matrix-like disappear: top to bottom, then bottom to top pattern
    const order = [0, 13, 1, 12, 2, 11, 3, 10, 4, 9, 5, 8, 6, 7];
    order.forEach((index, i) => {
      setTimeout(() => {
        setFlashBars((prev) => {
          const newBars = [...prev];
          newBars[index] = false;
          return newBars;
        });
      }, 800 + i * 150);
    });

    setTimeout(() => {
      setShowFlash(false);
      setStarted(true);
    }, 3000);
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const mountElement = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountElement.appendChild(renderer.domElement);

    const petalShape = new THREE.Shape();
    petalShape.moveTo(0, 0);
    petalShape.quadraticCurveTo(0.5, 0.5, 0.3, 1);
    petalShape.quadraticCurveTo(0, 0.8, -0.3, 1);
    petalShape.quadraticCurveTo(-0.5, 0.5, 0, 0);
    const petalGeometry = new THREE.ShapeGeometry(petalShape);
    const petals3D: THREE.Mesh[] = [];

    for (let i = 0; i < 60; i++) {
      const hue = Math.random() < 0.7 ? 0.95 + Math.random() * 0.05 : 0.85;
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(hue, 0.8, 0.5),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6 + Math.random() * 0.3,
      });

      const petal = new THREE.Mesh(petalGeometry, material);
      petal.position.x = (Math.random() - 0.5) * 30;
      petal.position.y = (Math.random() - 0.5) * 30;
      petal.position.z = (Math.random() - 0.5) * 30;
      petal.rotation.x = Math.random() * Math.PI;
      petal.rotation.y = Math.random() * Math.PI;
      petal.rotation.z = Math.random() * Math.PI;
      petal.scale.set(0.5 + Math.random() * 0.5, 0.5 + Math.random() * 0.5, 1);
      petal.userData = {
        speedY: Math.random() * 0.02 + 0.005,
        speedRotationX: (Math.random() - 0.5) * 0.03,
        speedRotationY: (Math.random() - 0.5) * 0.03,
        speedRotationZ: (Math.random() - 0.5) * 0.03,
        amplitude: Math.random() * 2,
        frequency: Math.random() * 0.02,
        offset: Math.random() * Math.PI * 2,
      };
      scene.add(petal);
      petals3D.push(petal);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0xff69b4, 1.5, 100);
    pointLight1.position.set(5, 5, 10);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xff1493, 1, 100);
    pointLight2.position.set(-5, -5, 10);
    scene.add(pointLight2);

    camera.position.z = 15;
    sceneRef.current = { scene, camera, renderer, petals: petals3D };

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      petals3D.forEach((petal) => {
        petal.position.y += petal.userData.speedY;
        petal.position.x +=
          Math.sin(time * petal.userData.frequency + petal.userData.offset) *
          petal.userData.amplitude *
          0.02;
        petal.rotation.x += petal.userData.speedRotationX;
        petal.rotation.y += petal.userData.speedRotationY;
        petal.rotation.z += petal.userData.speedRotationZ;

        if (petal.position.y > 15) {
          petal.position.y = -15;
          petal.position.x = (Math.random() - 0.5) * 30;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountElement.removeChild(renderer.domElement);
    };
  }, []);

  const handleYes = () => {
    if (step < messages.length - 1) {
      if (currentMemory < sharedMemories.length) {
        setShowMemory(true);
        setTimeout(() => {
          setShowMemory(false);
          setStep(step + 1);
          setCurrentMemory(currentMemory + 1);
        }, 3000);
      } else {
        setStep(step + 1);
      }

      setYesButtonScale(yesButtonScale + 0.2);
      setNoButtonPosition({ x: 0, y: 0 });
      setNoClickCount(0);

      const newPetals = Array.from({ length: 15 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: i * 0.06,
      }));
      setPetals((prev) => [...prev, ...newPetals]);
      setTimeout(() => {
        setPetals((prev) =>
          prev.filter((h) => !newPetals.find((nh) => nh.id === h.id))
        );
      }, 3000);
    } else {
      setStep(step + 1);
      setShowFireworks(true);
    }
  };

  const handleNo = () => {
    setNoClickCount(noClickCount + 1);
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    setNoButtonPosition({ x: randomX, y: randomY });

    const sadPetals = Array.from({ length: 3 }, (_, i) => ({
      id: Date.now() + i + 1000,
      left: 45 + Math.random() * 10,
      delay: i * 0.1,
    }));
    setPetals((prev) => [...prev, ...sadPetals]);
    setTimeout(() => {
      setPetals((prev) =>
        prev.filter((h) => !sadPetals.find((nh) => nh.id === h.id))
      );
    }, 2000);
  };

  if (showFlash) {
    const colors = [
      "#ff0066",
      "#ff1a75",
      "#ff3384",
      "#ff4d94",
      "#ff66a3",
      "#ff80b2",
      "#ff99c2",
      "#ffb3d1",
      "#ffcce0",
      "#e6005c",
      "#cc0052",
      "#b30047",
      "#99003d",
      "#800033",
    ];

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden">
        <div className="flex gap-1 h-screen items-center">
          {flashBars.map(
            (visible, i) =>
              visible && (
                <div
                  key={i}
                  className="h-full flex items-center justify-center text-white font-bold text-4xl"
                  style={{
                    backgroundColor: colors[i],
                    width: "calc(100vw / 14)",
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  I LOVE YOU SHRUTI
                </div>
              )
          )}
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-8xl mb-8 animate-bounce">💝</div>
          <button
            onClick={handleStart}
            className="px-12 py-6 bg-linear-to-r from-pink-500 to-purple-500 text-white text-2xl font-bold rounded-full shadow-2xl hover:scale-110 transition-transform"
          >
            Click to Start
          </button>
        </div>
      </div>
    );
  }

  if (showMemory && currentMemory < sharedMemories.length) {
    const memory = sharedMemories[currentMemory];
    return (
      <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
        <BirthdayCountdown
          isBirthday={isBirthday}
          timeUntilBirthday={timeUntilBirthday}
        />
        <div ref={mountRef} className="fixed inset-0 pointer-events-none" />
        <div
          className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-2xl text-center transform animate-fadeIn border-4 border-pink-200"
          style={{ marginTop: isBirthday ? "120px" : "80px" }}
        >
          <div className="text-7xl mb-6 animate-bounce">{memory.icon}</div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-4">
            {memory.title}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            "{memory.text}"
          </p>
          <div className="mt-8 text-pink-500">
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step >= messages.length) {
    return (
      <div className="min-h-screen bg-linear-to-br from-pink-100 via-rose-100 to-purple-100 flex flex-col items-center justify-center p-4 overflow-hidden relative">
        <BirthdayCountdown
          isBirthday={isBirthday}
          timeUntilBirthday={timeUntilBirthday}
        />
        <div ref={mountRef} className="fixed inset-0 pointer-events-none" />

        {showFireworks && (
          <>
            <div className="firework" style={{ left: "20%", top: "20%" }}></div>
            <div className="firework" style={{ left: "80%", top: "30%" }}></div>
            <div className="firework" style={{ left: "50%", top: "40%" }}></div>
            <div className="firework" style={{ left: "30%", top: "60%" }}></div>
            <div className="firework" style={{ left: "70%", top: "70%" }}></div>
          </>
        )}

        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="confetti-piece"
            style={{
              left: `${piece.left}%`,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              transform: `rotate(${piece.rotation}deg)`,
              color: piece.color,
            }}
          >
            {piece.shape}
          </div>
        ))}

        <div
          className="text-center space-y-8 animate-fadeIn max-w-4xl z-10"
          style={{ marginTop: isBirthday ? "100px" : "60px" }}
        >
          <div className="text-9xl animate-bounce mb-4">💍✨</div>
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-rose-600 to-purple-600 mb-6 animate-pulse">
            Shrutiiiiiiiiiii Said YES! 🎉
          </h1>
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border-4 border-pink-300">
            <p className="text-3xl text-gray-800 mb-6 font-semibold">
              You just made me the happiest person alive, Shruti! 💕
            </p>
            <p className="text-2xl text-gray-700 mb-6">
              I promise to love you with everything I have, every single day,
              Shrutiiiiiiiiiii.
            </p>
            <p className="text-xl text-gray-600 italic">
              Thank you for giving us another chance. I won't let you down. 🌹
            </p>
            {isBirthday && (
              <div className="mt-8 p-6 bg-linear-to-r from-pink-200 via-purple-200 to-rose-200 rounded-2xl border-2 border-pink-400">
                <p className="text-2xl text-gray-800 font-bold mb-2">
                  🎂 And Happy Birthday, Shrutiiiiiiiiiii! 🎂
                </p>
                <p className="text-lg text-gray-700">
                  What a perfect day to start our new journey together! 🎉
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-center gap-6 text-6xl my-8">
            <span className="animate-bounce">🌹</span>
            <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>
              💐
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              🌺
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>
              💝
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              🌸
            </span>
          </div>
          <p className="text-2xl text-purple-700 font-bold animate-pulse">
            This is just the beginning of our beautiful forever,
            Shrutiiiiiiiiiii... ✨
          </p>
          <div className="mt-8 p-6 bg-linear-to-r from-pink-200 to-purple-200 rounded-2xl">
            <p className="text-lg text-gray-800 mb-2">
              "Love is not about how many days, months, or years you've been
              together.
            </p>
            <p className="text-lg text-gray-800">
              It's about how much you love each other every single day."
            </p>
            <p className="text-md text-gray-600 mt-4 italic">
              - And I choose to love you, today and always, Shruti 💕
            </p>
          </div>
        </div>

        {petals.map((petal) => (
          <div
            key={petal.id}
            className="falling-petal"
            style={{
              left: `${petal.left}%`,
              animationDelay: `${petal.delay}s`,
            }}
          >
            🌹
          </div>
        ))}
      </div>
    );
  }

  const currentMessage = messages[step];

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4 overflow-hidden relative">
      <BirthdayCountdown
        isBirthday={isBirthday}
        timeUntilBirthday={timeUntilBirthday}
      />
      <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />

      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`,
            color: piece.color,
          }}
        >
          {piece.shape}
        </div>
      ))}

      {petals.map((petal) => (
        <div
          key={petal.id}
          className="falling-petal"
          style={{ left: `${petal.left}%`, animationDelay: `${petal.delay}s` }}
        >
          🌹
        </div>
      ))}

      <div
        className="max-w-4xl w-full z-10"
        style={{ marginTop: isBirthday ? "100px" : "60px" }}
      >
        <div className="text-center mb-12">
          <div className="text-8xl mb-6 animate-float">
            {currentMessage.emoji}
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-rose-600 to-purple-600 mb-8 animate-pulse drop-shadow-lg">
            {currentMessage.title}
          </h1>
        </div>

        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 mb-12 border-4 border-pink-200 transform hover:scale-105 transition-transform duration-300">
          <p className="text-2xl text-gray-800 mb-8 leading-relaxed text-center font-medium">
            {currentMessage.question}
          </p>

          {currentMessage.detail && (
            <div className="mt-6 p-6 bg-linear-to-r from-pink-100 to-purple-100 rounded-2xl border-2 border-pink-300">
              <p className="text-lg text-gray-700 italic leading-relaxed">
                {currentMessage.detail}
              </p>
            </div>
          )}

          <div className="flex gap-6 mt-10 justify-center flex-wrap">
            <button
              onClick={handleYes}
              className="px-12 py-6 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-bold hover:from-pink-600 hover:to-rose-600 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-pink-500/50 flex items-center gap-3"
              style={{ transform: `scale(${yesButtonScale})` }}
            >
              {currentMessage.yesText} 💖
            </button>

            <button
              onClick={handleNo}
              className="px-10 py-6 bg-gray-300 text-gray-700 rounded-full text-xl font-bold hover:bg-gray-400 transform transition-all duration-200 shadow-lg relative"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)]}
            </button>
          </div>

          {noClickCount > 5 && (
            <div className="mt-8 text-center">
              <p className="text-xl text-pink-600 font-bold animate-pulse">
                Please, Shrutiiiiiiiiiii... I'm being completely honest with you
                💔
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {messages.map((_, idx) => (
            <div
              key={idx}
              className={`h-3 rounded-full transition-all duration-500 ${
                idx === step
                  ? "w-16 bg-linear-to-r from-pink-500 to-rose-500 shadow-lg"
                  : idx < step
                  ? "w-10 bg-pink-400"
                  : "w-10 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Step {step + 1} of {messages.length}
          </p>
          <p className="text-sm text-pink-600 mt-2 italic">
            Each step brings us closer to our forever, Shruti ✨
          </p>
        </div>
      </div>

      <div className="fixed top-24 left-8 text-6xl animate-float opacity-70">
        🌹
      </div>
      <div
        className="fixed top-24 right-8 text-6xl animate-float opacity-70"
        style={{ animationDelay: "1s" }}
      >
        🌹
      </div>
      <div
        className="fixed bottom-8 left-8 text-6xl animate-float opacity-70"
        style={{ animationDelay: "2s" }}
      >
        💐
      </div>
      <div
        className="fixed bottom-8 right-8 text-6xl animate-float opacity-70"
        style={{ animationDelay: "1.5s" }}
      >
        💐
      </div>
    </div>
  );
};

export default ProposalSite;
