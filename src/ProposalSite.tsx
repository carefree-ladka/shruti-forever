import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import bgMusic from "./assets/AUD-20260130-WA0014.mp3";
import BalloonPop from "./components/BalloonPop";
import BirthdayCountdown from "./components/BirthdayCountdown";
import BoyfriendQuiz from "./components/BoyfriendQuiz";
import CompatibilityMeter from "./components/CompatibilityMeter";
import CutenessLoader from "./components/CutenessLoader";
import EmojiLoveStory from "./components/EmojiLoveStory";
import IfYouWere from "./components/IfYouWere";
import LoveCounter from "./components/LoveCounter";
import LoveLetter from "./components/LoveLetter";
import LoveMeter from "./components/LoveMeter";
import LoveNote from "./components/LoveNote";
import PromiseWall from "./components/PromiseWall";
import ReasonsCarousel from "./components/ReasonsCarousel";
import ScratchCards from "./components/ScratchCards";
import SparkleTrail from "./components/SparkleTrail";
import SpinWheel from "./components/SpinWheel";
import Typewriter from "./components/Typewriter";
import WishGranter from "./components/WishGranter";
import { FLASH_COLORS, RAIN_EMOJIS, SITE_CONFIG, START_SCREEN_EMOJIS } from "./data/constants";
import { messages, noButtonTexts, sharedMemories } from "./data/messages";
import { useBirthdayCountdown } from "./hooks/useBirthdayCountdown";
import "./styles/animations.css";
import { createConfettiPieces } from "./utils/confetti";

const ProposalSite = () => {
  const [started, setStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
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
  const [emojiRain, setEmojiRain] = useState<
    Array<{ id: number; left: number; delay: number; duration: number; emoji: string }>
  >([]);
  const [bonusStep, setBonusStep] = useState(0);
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
    setShowLoader(true);
  };

  const handleLoaderComplete = async () => {
    setShowLoader(false);
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

  const memoryQueue = useRef<number[]>([]);

  const showNextMemory = useCallback(() => {
    if (memoryQueue.current.length === 0) return;
    const nextIdx = memoryQueue.current.shift()!;
    setCurrentMemory(nextIdx);
    setShowMemory(true);
    setTimeout(() => {
      if (memoryQueue.current.length > 0) {
        showNextMemory();
      } else {
        setShowMemory(false);
      }
    }, 3000);
  }, []);

  const handleYes = () => {
    if (step < messages.length - 1) {
      // Show 2 memories per step to fit all 10 across 5 transitions
      const memoriesPerStep = 2;
      const startIdx = step * memoriesPerStep;
      const endIdx = Math.min(startIdx + memoriesPerStep, sharedMemories.length);

      if (startIdx < sharedMemories.length) {
        memoryQueue.current = [];
        for (let i = startIdx; i < endIdx; i++) {
          memoryQueue.current.push(i);
        }
        showNextMemory();
        setTimeout(() => {
          setShowMemory(false);
          setStep(step + 1);
        }, (endIdx - startIdx) * 3000);
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
      const rain = Array.from({ length: 40 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 3,
        emoji: RAIN_EMOJIS[Math.floor(Math.random() * RAIN_EMOJIS.length)],
      }));
      setEmojiRain(rain);
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

  if (showLoader) {
    return <CutenessLoader onComplete={handleLoaderComplete} />;
  }

  if (showFlash) {
    const colors = FLASH_COLORS;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden">
        <div className="flex gap-1 h-screen items-center">
          {flashBars.map(
            (visible, i) =>
              visible && (
                <div
                  key={i}
                  className="h-full flex items-center justify-center text-white font-bold text-lg sm:text-2xl md:text-4xl"
                  style={{
                    backgroundColor: colors[i],
                    width: "calc(100vw / 14)",
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  HAPPY BIRTHDAY {SITE_CONFIG.name.toUpperCase()}
                </div>
              )
          )}
        </div>
      </div>
    );
  }

  if (!started) {
    const startEmojis = START_SCREEN_EMOJIS;
    return (
      <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4 overflow-hidden relative">
        {/* Floating background emojis */}
        {startEmojis.map((emoji, i) => (
          <div
            key={i}
            className="absolute animate-float-around pointer-events-none text-2xl sm:text-3xl md:text-4xl opacity-40"
            style={{
              left: `${10 + (i * 12) % 80}%`,
              top: `${10 + (i * 17) % 70}%`,
              animationDuration: `${5 + i * 0.7}s`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {emoji}
          </div>
        ))}
        <div className="text-center z-10 px-4">
          <div className="text-6xl sm:text-7xl md:text-8xl mb-4 animate-bounce">🎂</div>
          <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2 animate-pulse">
            Something special is waiting for you...
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
            (hint: it's adorable 🥰)
          </p>
          <button
            onClick={handleStart}
            className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-linear-to-r from-pink-500 to-purple-500 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-2xl hover:scale-110 transition-transform animate-glow"
          >
            Click Me 💖
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
          className="bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-2xl w-full text-center transform animate-fadeIn border-4 border-pink-200"
          style={{ marginTop: isBirthday ? "120px" : "80px" }}
        >
          <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 animate-bounce">{memory.icon}</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-3 sm:mb-4">
            {memory.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed italic">
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
    const spawnPetals = () => {
      const newPetals = Array.from({ length: 10 }, (_, i) => ({
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
    };

    const handleBonusNext = () => {
      spawnPetals();
      setBonusStep((s) => s + 1);
    };

    const bonusPages: Array<{
      title: string;
      emoji: string;
      content: React.ReactNode;
      hasNextButton?: boolean;
    }> = [
      {
        title: `Happy Birthday, ${SITE_CONFIG.nameLong}! 🎉`,
        emoji: "🎂✨",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-10 shadow-2xl border-4 border-pink-300">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-3 sm:mb-4 md:mb-6 font-semibold">
              You make my world brighter every single day, {SITE_CONFIG.name}! 💕
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3 sm:mb-4 md:mb-6">
              I'm so grateful you're mine, {SITE_CONFIG.nameLong}. Here's to another
              amazing year together.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 italic">
              I love you more than yesterday and less than tomorrow. Happy
              Birthday, baby. 🌹
            </p>
            {isBirthday && (
              <div className="mt-4 sm:mt-6 md:mt-8 p-4 sm:p-5 md:p-6 bg-linear-to-r from-pink-200 via-purple-200 to-rose-200 rounded-xl sm:rounded-2xl border-2 border-pink-400">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-bold mb-1 sm:mb-2">
                  🎂 It's YOUR Day, {SITE_CONFIG.nameLong}! 🎂
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  The world got a little better the day you were born! 🎉
                </p>
              </div>
            )}
          </div>
        ),
      },
      {
        title: "How Much I Love You 💗",
        emoji: "💖",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-pink-200 overflow-hidden">
            <LoveCounter />
          </div>
        ),
      },
      {
        title: "Reasons I Love You 💕",
        emoji: "🌹",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-purple-200 overflow-hidden">
            <ReasonsCarousel />
          </div>
        ),
      },
      {
        title: "Pop Your Surprises! 🎈",
        emoji: "🎈",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-pink-200 overflow-hidden">
            <BalloonPop />
          </div>
        ),
      },
      {
        title: "Scratch to Reveal! 🎟️",
        emoji: "🎫",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-pink-200 overflow-hidden">
            <ScratchCards />
          </div>
        ),
      },
      {
        title: "If You Were... 💭",
        emoji: "🔮",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-purple-200 overflow-hidden">
            <IfYouWere />
          </div>
        ),
      },
      {
        title: "My Promises to You 🤞",
        emoji: "📝",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-pink-200 overflow-hidden">
            <PromiseWall />
          </div>
        ),
      },
      {
        title: "Are We Compatible? 🔬",
        emoji: "🔮",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-purple-200 overflow-hidden">
            <CompatibilityMeter />
          </div>
        ),
      },
      {
        title: "Our Love Story 📖",
        emoji: "💕",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-pink-200 overflow-hidden">
            <EmojiLoveStory />
          </div>
        ),
      },
      {
        title: "Spin & Win! 🎡",
        emoji: "🎰",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-purple-200 overflow-hidden">
            <SpinWheel />
          </div>
        ),
      },
      {
        title: "A Letter For You 💌",
        emoji: "💌",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-amber-200 overflow-hidden">
            <LoveLetter />
          </div>
        ),
      },
      {
        title: "Quiz Time! 🤔",
        emoji: "🧠",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-purple-200 overflow-hidden">
            <BoyfriendQuiz />
          </div>
        ),
      },
      {
        title: "Make a Wish 🌠",
        emoji: "🪄",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-pink-200 overflow-hidden">
            <WishGranter />
          </div>
        ),
      },
      {
        title: "One Last Thing... 💌",
        emoji: "💕",
        hasNextButton: true,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-pink-200 overflow-hidden">
            <LoveNote />
          </div>
        ),
      },
      {
        title: `Forever Yours, ${SITE_CONFIG.nameLong} ✨`,
        emoji: "💝",
        hasNextButton: false,
        content: (
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-pink-300 p-6 sm:p-8 md:p-12 text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-purple-700 font-bold animate-pulse mb-3 sm:mb-4 md:mb-6">
              Here's to forever with you, {SITE_CONFIG.nameLong}... ✨
            </p>
            <div className="p-4 sm:p-5 md:p-6 bg-linear-to-r from-pink-200 to-purple-200 rounded-xl sm:rounded-2xl">
              <p className="text-base sm:text-lg text-gray-800 mb-2">
                "The best birthday gift I ever got wasn't something wrapped —
              </p>
              <p className="text-base sm:text-lg text-gray-800">
                it was the day you became mine."
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 italic">
                - Happy Birthday, {SITE_CONFIG.name}. I love you endlessly 💕
              </p>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 text-2xl sm:text-3xl md:text-4xl">{"💖".repeat(7)}</div>
          </div>
        ),
      },
    ];

    const currentBonus = bonusPages[Math.min(bonusStep, bonusPages.length - 1)];

    return (
      <div className="min-h-screen bg-linear-to-br from-pink-100 via-rose-100 to-purple-100 flex items-center justify-center p-4 overflow-hidden relative">
        <SparkleTrail />
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

        {emojiRain.map((item) => (
          <div
            key={item.id}
            className="emoji-rain"
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
            }}
          >
            {item.emoji}
          </div>
        ))}

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
            style={{
              left: `${petal.left}%`,
              animationDelay: `${petal.delay}s`,
            }}
          >
            🌹
          </div>
        ))}

        <div
          className="max-w-4xl w-full z-10 animate-fadeIn px-2 sm:px-4"
          key={bonusStep}
          style={{ marginTop: isBirthday ? "100px" : "60px" }}
        >
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <div className="text-5xl sm:text-6xl md:text-8xl mb-2 sm:mb-4 animate-float">
              {currentBonus.emoji}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-rose-600 to-purple-600 mb-3 sm:mb-4 md:mb-6 animate-pulse">
              {currentBonus.title}
            </h1>
          </div>

          <div className="mb-4 sm:mb-6 md:mb-8">{currentBonus.content}</div>

          {currentBonus.hasNextButton && (
            <div className="text-center mt-4 sm:mt-6 md:mt-8">
              <button
                onClick={handleBonusNext}
                className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-linear-to-r from-pink-500 to-purple-500 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-2xl hover:scale-110 transition-transform animate-glow"
              >
                Next Surprise 🎁
              </button>
            </div>
          )}

          {/* Progress dots */}
          <div className="flex justify-center gap-1 sm:gap-1.5 md:gap-2 mt-4 sm:mt-6 md:mt-8 mb-2 sm:mb-4 flex-wrap">
            {bonusPages.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 sm:h-3 rounded-full transition-all duration-500 ${
                  idx === bonusStep
                    ? "w-6 sm:w-8 md:w-12 bg-linear-to-r from-pink-500 to-rose-500 shadow-lg"
                    : idx < bonusStep
                    ? "w-3 sm:w-4 md:w-6 bg-pink-400"
                    : "w-3 sm:w-4 md:w-6 bg-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-gray-500 pb-4">
            🎁 Surprise {Math.min(bonusStep + 1, bonusPages.length)} of{" "}
            {bonusPages.length}
          </p>
        </div>
      </div>
    );
  }

  const currentMessage = messages[step];

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4 overflow-hidden relative">
      <SparkleTrail />
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
        className="max-w-4xl w-full z-10 px-2 sm:px-4"
        style={{ marginTop: isBirthday ? "100px" : "60px" }}
      >
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="text-5xl sm:text-6xl md:text-8xl mb-3 sm:mb-4 md:mb-6 animate-float">
            {currentMessage.emoji}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-rose-600 to-purple-600 mb-4 sm:mb-6 md:mb-8 animate-pulse drop-shadow-lg">
            {currentMessage.title}
          </h1>
        </div>

        <div className="bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 mb-6 sm:mb-8 md:mb-12 border-4 border-pink-200 transform hover:scale-[1.02] md:hover:scale-105 transition-transform duration-300 animate-glow">
          <LoveMeter current={step + 1} total={messages.length} />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-center font-medium">
            <Typewriter text={currentMessage.question} speed={25} />
          </p>

          {currentMessage.detail && (
            <div className="mt-4 sm:mt-6 p-4 sm:p-5 md:p-6 bg-linear-to-r from-pink-100 to-purple-100 rounded-xl sm:rounded-2xl border-2 border-pink-300">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 italic leading-relaxed">
                {currentMessage.detail}
              </p>
            </div>
          )}

          <div className="flex gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 justify-center flex-wrap">
            <button
              onClick={handleYes}
              className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-bold hover:from-pink-600 hover:to-rose-600 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-pink-500/50 flex items-center gap-2 sm:gap-3"
              style={{ transform: `scale(${yesButtonScale})` }}
            >
              {currentMessage.yesText} 💖
            </button>

            <button
              onClick={handleNo}
              className="px-5 sm:px-7 md:px-10 py-3 sm:py-4 md:py-6 bg-gray-300 text-gray-700 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-bold hover:bg-gray-400 transform transition-all duration-200 shadow-lg relative"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)]}
            </button>
          </div>

          {noClickCount > 5 && (
            <div className="mt-4 sm:mt-6 md:mt-8 text-center">
              <p className="text-base sm:text-lg md:text-xl text-pink-600 font-bold animate-pulse">
                Come on birthday girl, you know you love this 😂💕
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
          {messages.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 sm:h-3 rounded-full transition-all duration-500 ${
                idx === step
                  ? "w-8 sm:w-12 md:w-16 bg-linear-to-r from-pink-500 to-rose-500 shadow-lg"
                  : idx < step
                  ? "w-5 sm:w-7 md:w-10 bg-pink-400"
                  : "w-5 sm:w-7 md:w-10 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            🎁 Gift {step + 1} of {messages.length}
          </p>
          <p className="text-xs sm:text-sm text-pink-600 mt-1 sm:mt-2 italic">
            Unwrapping your birthday surprise, one step at a time 🎁✨
          </p>
        </div>
      </div>

      <div className="fixed top-24 left-4 sm:left-8 text-3xl sm:text-4xl md:text-6xl animate-float opacity-70 hidden sm:block">
        🌹
      </div>
      <div
        className="fixed top-24 right-4 sm:right-8 text-3xl sm:text-4xl md:text-6xl animate-float opacity-70 hidden sm:block"
        style={{ animationDelay: "1s" }}
      >
        🌹
      </div>
      <div
        className="fixed bottom-8 left-4 sm:left-8 text-3xl sm:text-4xl md:text-6xl animate-float opacity-70 hidden sm:block"
        style={{ animationDelay: "2s" }}
      >
        💐
      </div>
      <div
        className="fixed bottom-8 right-4 sm:right-8 text-3xl sm:text-4xl md:text-6xl animate-float opacity-70 hidden sm:block"
        style={{ animationDelay: "1.5s" }}
      >
        💐
      </div>
    </div>
  );
};

export default ProposalSite;
