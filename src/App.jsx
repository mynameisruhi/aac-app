import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAncFETg0OhP-hz6sv1xWTkX-p6-tNeFks",
  authDomain: "aac-app-5fe3f.firebaseapp.com",
  projectId: "aac-app-5fe3f",
  storageBucket: "aac-app-5fe3f.firebasestorage.app",
  messagingSenderId: "721130838384",
  appId: "1:721130838384:web:5a98a7523d9bc065e9d7b5",
  measurementId: "G-KLZNG3XHDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Theme Background Components
const SpaceBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-black" />
    {/* Stars - static, no animation */}
    {[...Array(50)].map((_, i) => (
      <div
        key={`star-${i}`}
        className="absolute rounded-full bg-white"
        style={{
          width: Math.random() * 3 + 1 + 'px',
          height: Math.random() * 3 + 1 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
        }}
      />
    ))}
    {/* Planets */}
    <div className="absolute text-6xl" style={{ top: '10%', right: '10%' }}>🪐</div>
    <div className="absolute text-4xl" style={{ top: '30%', left: '5%' }}>🌙</div>
    <div className="absolute text-5xl" style={{ bottom: '20%', right: '15%' }}>🌍</div>
    <div className="absolute text-3xl" style={{ top: '60%', left: '8%' }}>⭐</div>
    <div className="absolute text-4xl" style={{ top: '15%', left: '30%' }}>🚀</div>
    <div className="absolute text-3xl" style={{ bottom: '30%', left: '20%' }}>🛸</div>
  </div>
);

const OceanBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-blue-900" />
    {/* Bubbles - static, no animation */}
    {[...Array(20)].map((_, i) => (
      <div
        key={`bubble-${i}`}
        className="absolute rounded-full bg-white/30"
        style={{
          width: Math.random() * 20 + 10 + 'px',
          height: Math.random() * 20 + 10 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
        }}
      />
    ))}
    {/* Sea creatures */}
    <div className="absolute text-5xl" style={{ top: '20%', right: '10%' }}>🐠</div>
    <div className="absolute text-6xl" style={{ bottom: '15%', left: '10%' }}>🐙</div>
    <div className="absolute text-4xl" style={{ top: '50%', right: '20%' }}>🐡</div>
    <div className="absolute text-5xl" style={{ top: '70%', left: '30%' }}>🦀</div>
    <div className="absolute text-4xl" style={{ top: '30%', left: '15%' }}>🐚</div>
    <div className="absolute text-6xl" style={{ bottom: '30%', right: '5%' }}>🐳</div>
    <div className="absolute text-4xl" style={{ top: '10%', left: '40%' }}>🌊</div>
    <div className="absolute text-5xl" style={{ bottom: '10%', left: '50%' }}>🦈</div>
    <div className="absolute text-3xl" style={{ top: '40%', left: '5%' }}>🐟</div>
  </div>
);

const DinosaurBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-green-600 to-green-900" />
    {/* Trees/plants */}
    {[...Array(8)].map((_, i) => (
      <div
        key={`tree-${i}`}
        className="absolute text-4xl"
        style={{
          left: (i * 12 + 5) + '%',
          bottom: '5%'
        }}
      >
        🌴
      </div>
    ))}
    {/* Dinosaurs */}
    <div className="absolute text-7xl" style={{ bottom: '10%', right: '10%' }}>🦕</div>
    <div className="absolute text-6xl" style={{ bottom: '15%', left: '15%' }}>🦖</div>
    <div className="absolute text-5xl" style={{ top: '20%', right: '20%' }}>🦅</div>
    <div className="absolute text-4xl" style={{ top: '40%', left: '10%' }}>🥚</div>
    <div className="absolute text-5xl" style={{ bottom: '25%', left: '40%' }}>🌋</div>
    <div className="absolute text-4xl" style={{ top: '15%', left: '25%' }}>☁️</div>
    <div className="absolute text-4xl" style={{ top: '10%', right: '30%' }}>☁️</div>
    <div className="absolute text-3xl" style={{ bottom: '20%', right: '30%' }}>🦎</div>
    <div className="absolute text-5xl" style={{ top: '50%', right: '5%' }}>🌿</div>
  </div>
);

const PrincessBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-pink-300 via-purple-300 to-pink-400" />
    {/* Sparkles - static, no animation */}
    {[...Array(30)].map((_, i) => (
      <div
        key={`sparkle-${i}`}
        className="absolute text-xl"
        style={{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
        }}
      >
        ✨
      </div>
    ))}
    {/* Princess items */}
    <div className="absolute text-6xl" style={{ top: '10%', right: '15%' }}>👑</div>
    <div className="absolute text-5xl" style={{ top: '25%', left: '10%' }}>🪄</div>
    <div className="absolute text-4xl" style={{ bottom: '20%', right: '10%' }}>💎</div>
    <div className="absolute text-5xl" style={{ bottom: '30%', left: '15%' }}>🏰</div>
    <div className="absolute text-4xl" style={{ top: '40%', right: '25%' }}>💖</div>
    <div className="absolute text-4xl" style={{ top: '15%', left: '30%' }}>🦋</div>
    <div className="absolute text-5xl" style={{ bottom: '15%', left: '40%' }}>🌸</div>
    <div className="absolute text-4xl" style={{ top: '60%', left: '5%' }}>💫</div>
    <div className="absolute text-3xl" style={{ top: '50%', right: '8%' }}>🎀</div>
    <div className="absolute text-4xl" style={{ bottom: '40%', right: '20%' }}>💍</div>
  </div>
);

// Voice options
const VOICE_OPTIONS = [
  { id: 'default', name: 'Default', rate: 1, pitch: 1 },
  { id: 'slow', name: 'Slow & Clear', rate: 0.7, pitch: 1 },
  { id: 'child', name: 'Child-like', rate: 1.1, pitch: 1.4 },
  { id: 'deep', name: 'Deep', rate: 0.9, pitch: 0.7 },
  { id: 'fast', name: 'Fast', rate: 1.3, pitch: 1 }
];

const CATEGORY_COLORS = {
  actions: 'bg-blue-100 border-blue-300',
  feelings: 'bg-purple-100 border-purple-300',
  people: 'bg-pink-100 border-pink-300',
  phrases: 'bg-green-100 border-green-300'
};

const CATEGORY_COLORS_HIGH_CONTRAST = {
  actions: 'bg-blue-600 border-blue-800 text-white',
  feelings: 'bg-purple-600 border-purple-800 text-white',
  people: 'bg-pink-600 border-pink-800 text-white',
  phrases: 'bg-green-600 border-green-800 text-white'
};

const INITIAL_CATEGORIES = [
  { id: 'phrases', name: 'Quick Phrases', emoji: '💬', isDefault: true, stem: '', color: 'green' },
  { id: 'actions', name: 'Actions', emoji: '✋', isDefault: true, stem: 'I want to ', color: 'blue' },
  { id: 'feelings', name: 'Feelings', emoji: '😊', isDefault: true, stem: 'I feel ', color: 'purple' },
  { id: 'people', name: 'People', emoji: '👤', isDefault: true, stem: 'I want to see ', color: 'pink' }
];

const INITIAL_TILES = {
  phrases: [
    { id: 'yes', name: 'Yes', emoji: '✅', isDefault: true, fullPhrase: 'Yes.' },
    { id: 'no', name: 'No', emoji: '❌', isDefault: true, fullPhrase: 'No.' },
    { id: 'help', name: 'Help', emoji: '🆘', isDefault: true, fullPhrase: 'Help.' },
    { id: 'idk', name: "I don't know", emoji: '🤷', isDefault: true, fullPhrase: "I don't know." },
    { id: 'wait', name: 'Wait', emoji: '✋', isDefault: true, fullPhrase: 'Wait.' },
    { id: 'more', name: 'More', emoji: '➕', isDefault: true, fullPhrase: 'More.' },
    { id: 'done', name: 'All done', emoji: '🏁', isDefault: true, fullPhrase: 'All done.' },
    { id: 'please', name: 'Please', emoji: '🙏', isDefault: true, fullPhrase: 'Please.' },
    { id: 'thanks', name: 'Thank you', emoji: '💝', isDefault: true, fullPhrase: 'Thank you.' },
    { id: 'sorry', name: 'Sorry', emoji: '😔', isDefault: true, fullPhrase: 'Sorry.' }
  ],
  actions: [
    { id: 'stop', name: 'stop', emoji: '🛑', isDefault: true },
    { id: 'eat', name: 'eat', emoji: '🍽️', isDefault: true },
    { id: 'drink', name: 'drink', emoji: '🥤', isDefault: true },
    { id: 'rest', name: 'rest', emoji: '😴', isDefault: true },
    { id: 'bathroom', name: 'use the bathroom', emoji: '🚽', isDefault: true },
    { id: 'play', name: 'play', emoji: '🎮', isDefault: true },
    { id: 'read', name: 'read', emoji: '📖', isDefault: true },
    { id: 'walk', name: 'walk', emoji: '🚶', isDefault: true },
    { id: 'sit', name: 'sit down', emoji: '🪑', isDefault: true },
    { id: 'stand', name: 'stand up', emoji: '🧍', isDefault: true },
    { id: 'hug', name: 'hug', emoji: '🤗', isDefault: true },
    { id: 'gethelp', name: 'get help', emoji: '🙋', isDefault: true },
    { id: 'watch', name: 'watch TV', emoji: '📺', isDefault: true },
    { id: 'listen', name: 'listen to music', emoji: '🎵', isDefault: true },
    { id: 'sleep', name: 'sleep', emoji: '🛏️', isDefault: true },
    { id: 'wash', name: 'wash hands', emoji: '🧼', isDefault: true },
    { id: 'brush', name: 'brush teeth', emoji: '🪥', isDefault: true },
    { id: 'go_outside', name: 'go outside', emoji: '🌳', isDefault: true },
    { id: 'go_home', name: 'go home', emoji: '🏠', isDefault: true },
    { id: 'action_wait', name: 'wait', emoji: '⏰', isDefault: true }
  ],
  feelings: [
    { id: 'happy', name: 'happy', emoji: '😀', isDefault: true },
    { id: 'sad', name: 'sad', emoji: '🥲', isDefault: true },
    { id: 'angry', name: 'angry', emoji: '😠', isDefault: true },
    { id: 'worried', name: 'worried', emoji: '😟', isDefault: true },
    { id: 'calm', name: 'calm', emoji: '😌', isDefault: true },
    { id: 'neutral', name: 'neutral', emoji: '😐', isDefault: true },
    { id: 'excited', name: 'excited', emoji: '🤩', isDefault: true },
    { id: 'scared', name: 'scared', emoji: '😨', isDefault: true },
    { id: 'tired', name: 'tired', emoji: '😫', isDefault: true },
    { id: 'sick', name: 'sick', emoji: '🤒', isDefault: true },
    { id: 'hungry', name: 'hungry', emoji: '🤤', isDefault: true },
    { id: 'thirsty', name: 'thirsty', emoji: '💧', isDefault: true },
    { id: 'confused', name: 'confused', emoji: '😕', isDefault: true },
    { id: 'frustrated', name: 'frustrated', emoji: '😤', isDefault: true },
    { id: 'lonely', name: 'lonely', emoji: '🥺', isDefault: true },
    { id: 'proud', name: 'proud', emoji: '😊', isDefault: true },
    { id: 'embarrassed', name: 'embarrassed', emoji: '😳', isDefault: true },
    { id: 'bored', name: 'bored', emoji: '😒', isDefault: true },
    { id: 'surprised', name: 'surprised', emoji: '😲', isDefault: true },
    { id: 'loved', name: 'loved', emoji: '🥰', isDefault: true }
  ],
  people: [
    { id: 'mom', name: 'Mom', emoji: '👩', isDefault: true },
    { id: 'dad', name: 'Dad', emoji: '👨', isDefault: true },
    { id: 'teacher', name: 'Teacher', emoji: '🧑‍🏫', isDefault: true },
    { id: 'grandma', name: 'Grandma', emoji: '👵', isDefault: true },
    { id: 'grandpa', name: 'Grandpa', emoji: '👴', isDefault: true }
  ]
};

// Word prediction patterns
const PREDICTION_PATTERNS = {
  'feelings::hungry': ['actions::eat', 'actions::drink', 'phrases::please'],
  'feelings::thirsty': ['actions::drink', 'phrases::please', 'actions::stop'],
  'feelings::tired': ['actions::rest', 'actions::sleep', 'phrases::done'],
  'feelings::sad': ['actions::hug', 'people::mom', 'people::dad'],
  'feelings::scared': ['people::mom', 'people::dad', 'actions::hug'],
  'feelings::sick': ['people::mom', 'actions::rest', 'phrases::help'],
  'feelings::bored': ['actions::play', 'actions::watch', 'actions::go_outside'],
  'actions::eat': ['feelings::hungry', 'phrases::please', 'phrases::more'],
  'actions::drink': ['feelings::thirsty', 'phrases::please', 'phrases::more'],
  'actions::play': ['actions::go_outside', 'feelings::happy', 'phrases::please'],
  'actions::bathroom': ['phrases::wait', 'phrases::help', 'phrases::please'],
  'actions::sleep': ['feelings::tired', 'phrases::done', 'people::mom'],
  'actions::hug': ['people::mom', 'people::dad', 'feelings::sad'],
  'phrases::help': ['actions::bathroom', 'feelings::sick', 'feelings::scared'],
  'phrases::please': ['actions::eat', 'actions::drink', 'actions::play'],
  'people::mom': ['actions::hug', 'feelings::loved', 'phrases::help'],
  'people::dad': ['actions::hug', 'feelings::loved', 'actions::play'],
  'people::teacher': ['phrases::help', 'actions::bathroom', 'phrases::idk']
};

const PASTEL_COLORS = [
  'bg-red-100 border-red-300',
  'bg-orange-100 border-orange-300',
  'bg-amber-100 border-amber-300',
  'bg-yellow-100 border-yellow-300',
  'bg-lime-100 border-lime-300',
  'bg-emerald-100 border-emerald-300',
  'bg-teal-100 border-teal-300',
  'bg-cyan-100 border-cyan-300',
  'bg-sky-100 border-sky-300',
  'bg-indigo-100 border-indigo-300',
  'bg-violet-100 border-violet-300',
  'bg-fuchsia-100 border-fuchsia-300',
  'bg-rose-100 border-rose-300'
];

export default function AACCommunicationTool() {
  const [currentPage, setCurrentPage] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [syncStatus, setSyncStatus] = useState('');
  
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ username: '', password: '', confirmPassword: '' });
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [tiles, setTiles] = useState(INITIAL_TILES);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSelections, setCurrentSelections] = useState({});
  const [history, setHistory] = useState([]);
  const [currentSentence, setCurrentSentence] = useState('');
  const [isGeneratingTiles, setIsGeneratingTiles] = useState(false);
  
  const [settings, setSettings] = useState({
    soundEnabled: true,
    highContrast: false,
    theme: 'default',
    voice: 'default'
  });
  const [showSettings, setShowSettings] = useState(false);
  
  const [tileUsage, setTileUsage] = useState({});
  const [favoriteCategories, setFavoriteCategories] = useState([]);
  const [favoriteTiles, setFavoriteTiles] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [lastSelectedTile, setLastSelectedTile] = useState(null);
  const [userPassword, setUserPassword] = useState('');
  
  const [passwordPopup, setPasswordPopup] = useState(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const [contextMenu, setContextMenu] = useState(null);
  const [popup, setPopup] = useState(null);
  const [newCategoryForm, setNewCategoryForm] = useState({ name: '', image: null, stem: '' });
  const [newTileForm, setNewTileForm] = useState({ name: '', image: null });
  const [editForm, setEditForm] = useState({ value: '', image: null });
  const [categoryError, setCategoryError] = useState('');
  const [tileError, setTileError] = useState('');

  const audioContextRef = useRef(null);

  // Cloud sync functions using Firebase
  const saveToCloud = async (username, data) => {
    try {
      await setDoc(doc(db, "users", username), data);
      setSyncStatus('Saved ✓');
      setTimeout(() => setSyncStatus(''), 2000);
      return true;
    } catch (error) {
      console.error('Failed to save to cloud:', error);
      setSyncStatus('Sync failed');
      return false;
    }
  };

  const loadFromCloud = async (username) => {
    try {
      const docSnap = await getDoc(doc(db, "users", username));
      if (docSnap.exists()) {
        return docSnap.data();
      }
      return null;
    } catch (error) {
      console.error('Failed to load from cloud:', error);
      return null;
    }
  };

  const playTapSound = () => {
    if (!settings.soundEnabled) return;
    
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      
      // Create a short click sound
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Click - short burst of noise-like sound
      oscillator.frequency.setValueAtTime(1800, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.02);
      oscillator.type = 'square';
      
      // Very short envelope for click
      gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.04);
    } catch (e) {
      console.log('Audio not supported');
    }
  };

  const verifyPassword = (callback) => {
    if (passwordInput === userPassword) {
      setPasswordPopup(null);
      setPasswordInput('');
      setPasswordError('');
      callback();
    } else {
      setPasswordError('Incorrect password');
    }
  };

  const requestPasswordVerification = (action, callback) => {
    setPasswordPopup({ action, callback });
    setPasswordInput('');
    setPasswordError('');
  };

  const generateSuggestions = (categoryId, tileId) => {
    const key = `${categoryId}::${tileId}`;
    const patterns = PREDICTION_PATTERNS[key] || [];
    
    const suggestedTiles = patterns.map(pattern => {
      const [catId, tId] = pattern.split('::');
      const tile = tiles[catId]?.find(t => t.id === tId);
      if (tile) {
        return { categoryId: catId, tile };
      }
      return null;
    }).filter(Boolean).slice(0, 5);
    
    setSuggestions(suggestedTiles);
  };

  const getMostUsedTiles = () => {
    const allUsage = [];
    Object.entries(tileUsage).forEach(([key, count]) => {
      const [categoryId, tileId] = key.split('::');
      const category = categories.find(c => c.id === categoryId);
      const tile = tiles[categoryId]?.find(t => t.id === tileId);
      if (category && tile) {
        allUsage.push({ categoryId, tile, count, category });
      }
    });
    return allUsage.sort((a, b) => b.count - a.count).slice(0, 5);
  };

  const getSortedCategories = () => {
    return [...categories].sort((a, b) => {
      const aFav = favoriteCategories.includes(a.id);
      const bFav = favoriteCategories.includes(b.id);
      if (aFav && !bFav) return -1;
      if (!aFav && bFav) return 1;
      return 0;
    });
  };

  const getSortedTiles = (categoryId) => {
    const categoryTiles = tiles[categoryId] || [];
    const favs = favoriteTiles[categoryId] || [];
    return [...categoryTiles].sort((a, b) => {
      const aFav = favs.includes(a.id);
      const bFav = favs.includes(b.id);
      if (aFav && !bFav) return -1;
      if (!aFav && bFav) return 1;
      return 0;
    });
  };

  const getCategoryColor = (category) => {
    if (settings.highContrast) {
      return CATEGORY_COLORS_HIGH_CONTRAST[category.id] || 'bg-gray-600 border-gray-800 text-white';
    }
    return CATEGORY_COLORS[category.id] || PASTEL_COLORS[categories.indexOf(category) % PASTEL_COLORS.length];
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voiceSettings = VOICE_OPTIONS.find(v => v.id === settings.voice) || VOICE_OPTIONS[0];
      utterance.rate = voiceSettings.rate;
      utterance.pitch = voiceSettings.pitch;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleLogin = async () => {
    const { username, password } = loginForm;
    if (!username || !password) {
      setLoginError('Please enter username and password');
      return;
    }
    
    setIsLoading(true);
    setLoginError('');
    
    try {
      const cloudData = await loadFromCloud(username);
      
      if (cloudData) {
        if (cloudData.password === password) {
          setCurrentUser(username);
          setUserPassword(password);
          setCategories(cloudData.categories || INITIAL_CATEGORIES);
          setTiles(cloudData.tiles || INITIAL_TILES);
          setSettings(cloudData.settings || { soundEnabled: true, highContrast: false, theme: 'default', voice: 'default' });
          setTileUsage(cloudData.tileUsage || {});
          setFavoriteCategories(cloudData.favoriteCategories || []);
          setFavoriteTiles(cloudData.favoriteTiles || {});
          setHistory([]);
          setCurrentSelections({});
          setSuggestions([]);
          setCurrentPage('main');
        } else {
          setLoginError('Information is inaccurate');
        }
      } else {
        setLoginError('Information is inaccurate');
      }
    } catch (error) {
      setLoginError('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    const { username, password, confirmPassword } = registerForm;
    if (!username || !password || !confirmPassword) {
      setRegisterError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setRegisterError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    setRegisterError('');
    
    try {
      const existingUser = await loadFromCloud(username);
      
      if (existingUser) {
        setRegisterError('Username already exists');
      } else {
        const newUserData = {
          password,
          categories: INITIAL_CATEGORIES,
          tiles: INITIAL_TILES,
          settings: { soundEnabled: true, highContrast: false, theme: 'default', voice: 'default' },
          tileUsage: {},
          favoriteCategories: [],
          favoriteTiles: {}
        };
        
        await saveToCloud(username, newUserData);
        setRegisterError('');
        setRegisterForm({ username: '', password: '', confirmPassword: '' });
        setCurrentPage('login');
      }
    } catch (error) {
      setRegisterError('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    if (currentUser) {
      setSyncStatus('Saving...');
      await saveToCloud(currentUser, {
        password: userPassword,
        categories,
        tiles,
        settings,
        tileUsage,
        favoriteCategories,
        favoriteTiles
      });
    }
    setCurrentUser(null);
    setUserPassword('');
    setHistory([]);
    setCurrentSentence('');
    setCurrentSelections({});
    setSuggestions([]);
    setLoginForm({ username: '', password: '' });
    setCurrentPage('login');
  };

  const handleTileClick = (categoryId, tile) => {
    playTapSound();
    
    const usageKey = `${categoryId}::${tile.id}`;
    setTileUsage(prev => ({
      ...prev,
      [usageKey]: (prev[usageKey] || 0) + 1
    }));
    
    setCurrentSelections(prev => ({
      ...prev,
      [categoryId]: tile
    }));
    
    setLastSelectedTile({ categoryId, tile });
    generateSuggestions(categoryId, tile.id);
    
    setCurrentPage('main');
  };

  const handleSuggestionClick = (categoryId, tile) => {
    playTapSound();
    
    const usageKey = `${categoryId}::${tile.id}`;
    setTileUsage(prev => ({
      ...prev,
      [usageKey]: (prev[usageKey] || 0) + 1
    }));
    
    setCurrentSelections(prev => ({
      ...prev,
      [categoryId]: tile
    }));
    
    setLastSelectedTile({ categoryId, tile });
    generateSuggestions(categoryId, tile.id);
  };

  const handleMostUsedTileClick = (categoryId, tile) => {
    playTapSound();
    
    const usageKey = `${categoryId}::${tile.id}`;
    setTileUsage(prev => ({
      ...prev,
      [usageKey]: (prev[usageKey] || 0) + 1
    }));
    
    setCurrentSelections(prev => ({
      ...prev,
      [categoryId]: tile
    }));
    
    setLastSelectedTile({ categoryId, tile });
    generateSuggestions(categoryId, tile.id);
  };

  const buildSentencePreview = () => {
    const parts = [];
    
    Object.entries(currentSelections).forEach(([categoryId, tile]) => {
      if (tile) {
        parts.push({
          categoryId,
          tile,
          emoji: tile.customImage ? null : tile.emoji,
          image: tile.customImage,
          name: tile.name
        });
      }
    });
    
    return parts;
  };

  const buildSentence = () => {
    const action = currentSelections.actions;
    const feeling = currentSelections.feelings;
    const person = currentSelections.people;
    const phrase = currentSelections.phrases;
    
    let sentence = '';
    
    if (phrase && phrase.fullPhrase) {
      let parts = [phrase.fullPhrase.replace(/\.$/, '')];
      if (feeling) parts.push(`I feel ${feeling.name}`);
      if (action && action !== phrase) parts.push(`I want to ${action.name}`);
      if (person) parts.push(`I want to see ${person.name}`);
      sentence = parts.join('. ');
    } else {
      const customCategories = categories.filter(c => !c.isDefault);
      const customSelection = customCategories.find(c => currentSelections[c.id]);
      
      if (customSelection && currentSelections[customSelection.id]) {
        sentence = `${customSelection.stem}${currentSelections[customSelection.id].name}`;
      } else if (action && feeling && person) {
        sentence = `I want to ${action.name} with ${person.name}, and I feel ${feeling.name}`;
      } else if (action && feeling) {
        sentence = `I want to ${action.name}, and I feel ${feeling.name}`;
      } else if (action && person) {
        sentence = `I want to ${action.name} with ${person.name}`;
      } else if (feeling && person) {
        sentence = `I feel ${feeling.name}, and I want to see ${person.name}`;
      } else if (action) {
        sentence = `I want to ${action.name}`;
      } else if (feeling) {
        sentence = `I feel ${feeling.name}`;
      } else if (person) {
        sentence = `I want to see ${person.name}`;
      }
    }
    
    // Ensure exactly one period at the end
    if (sentence) {
      sentence = sentence.replace(/\.+$/, '') + '.';
    }
    
    return sentence;
  };

  const handleDone = () => {
    const sentence = buildSentence();
    if (sentence) {
      if (currentSentence) {
        setHistory(prev => [...prev, currentSentence]);
      }
      setCurrentSentence(sentence);
      speak(sentence);
      setCurrentSelections({});
      setSuggestions([]);
      setLastSelectedTile(null);
    }
  };

  const handleContextMenu = (e, type, item, categoryId = null) => {
    if (e.preventDefault) e.preventDefault();
    const x = e.clientX || e.pageX;
    const y = e.clientY || e.pageY;
    setContextMenu({
      x,
      y,
      type,
      item,
      categoryId
    });
  };

  const closeContextMenu = () => setContextMenu(null);

  const handleChangeImage = () => {
    setPopup({
      type: 'changeImage',
      target: contextMenu.type,
      item: contextMenu.item,
      categoryId: contextMenu.categoryId
    });
    closeContextMenu();
  };

  const handleDeleteImage = () => {
    if (contextMenu.type === 'category') {
      if (!contextMenu.item.isDefault && contextMenu.item.customImage) {
        setCategories(prev => prev.map(c => 
          c.id === contextMenu.item.id ? { ...c, customImage: null } : c
        ));
      }
    } else if (contextMenu.type === 'tile') {
      if (!contextMenu.item.isDefault && contextMenu.item.customImage) {
        setTiles(prev => ({
          ...prev,
          [contextMenu.categoryId]: prev[contextMenu.categoryId].map(t =>
            t.id === contextMenu.item.id ? { ...t, customImage: null } : t
          )
        }));
      }
    }
    closeContextMenu();
  };

  const handleToggleFavorite = () => {
    if (contextMenu.type === 'category') {
      const catId = contextMenu.item.id;
      setFavoriteCategories(prev => 
        prev.includes(catId) 
          ? prev.filter(id => id !== catId)
          : [...prev, catId]
      );
    } else if (contextMenu.type === 'tile') {
      const catId = contextMenu.categoryId;
      const tileId = contextMenu.item.id;
      setFavoriteTiles(prev => {
        const categoryFavs = prev[catId] || [];
        return {
          ...prev,
          [catId]: categoryFavs.includes(tileId)
            ? categoryFavs.filter(id => id !== tileId)
            : [...categoryFavs, tileId]
        };
      });
    }
    closeContextMenu();
  };

  const handleDeleteCategory = () => {
    if (!contextMenu.item.isDefault) {
      requestPasswordVerification('delete category', () => {
        setPopup({
          type: 'confirmDeleteCategory',
          item: contextMenu.item
        });
      });
    }
    closeContextMenu();
  };

  const handleDeleteTile = () => {
    if (!contextMenu.item.isDefault) {
      const tileToDelete = contextMenu.item;
      const catId = contextMenu.categoryId;
      requestPasswordVerification('delete tile', () => {
        setTiles(prev => ({
          ...prev,
          [catId]: prev[catId].filter(t => t.id !== tileToDelete.id)
        }));
      });
    }
    closeContextMenu();
  };

  const confirmDeleteCategory = () => {
    const catId = popup.item.id;
    setCategories(prev => prev.filter(c => c.id !== catId));
    setTiles(prev => {
      const newTiles = { ...prev };
      delete newTiles[catId];
      return newTiles;
    });
    setFavoriteCategories(prev => prev.filter(id => id !== catId));
    setPopup(null);
  };

  const handleImageUpload = (e, target) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (target === 'newCategory') {
          setNewCategoryForm(prev => ({ ...prev, image: event.target.result }));
        } else if (target === 'newTile') {
          setNewTileForm(prev => ({ ...prev, image: event.target.result }));
        } else if (target === 'edit') {
          setEditForm(prev => ({ ...prev, image: event.target.result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateCategoryClick = () => {
    requestPasswordVerification('create category', () => {
      setPopup({ type: 'createCategory' });
    });
  };

  const handleCreateTileClick = () => {
    requestPasswordVerification('create tile', () => {
      setPopup({ type: 'createTile' });
    });
  };

  const createCategory = () => {
    if (!newCategoryForm.name || !newCategoryForm.stem) {
      setCategoryError('Please fill in all fields');
      return;
    }
    if (!newCategoryForm.image) {
      setCategoryError('Please upload an image');
      return;
    }
    const newCat = {
      id: `custom_${Date.now()}`,
      name: newCategoryForm.name,
      emoji: '📁',
      customImage: newCategoryForm.image,
      isDefault: false,
      stem: newCategoryForm.stem
    };
    setCategories(prev => [...prev, newCat]);
    setTiles(prev => ({ ...prev, [newCat.id]: [] }));
    setNewCategoryForm({ name: '', image: null, stem: '' });
    setCategoryError('');
    setPopup(null);
  };

  const createTile = () => {
    if (!newTileForm.name) {
      setTileError('Please enter a tile name');
      return;
    }
    if (!newTileForm.image) {
      setTileError('Please upload an image');
      return;
    }
    if (!selectedCategory) {
      setTileError('No category selected');
      return;
    }
    const newTile = {
      id: `custom_${Date.now()}`,
      name: newTileForm.name,
      emoji: '📝',
      customImage: newTileForm.image,
      isDefault: false
    };
    setTiles(prev => ({
      ...prev,
      [selectedCategory]: [...(prev[selectedCategory] || []), newTile]
    }));
    setNewTileForm({ name: '', image: null });
    setTileError('');
    setPopup(null);
  };

  const handleGenerateMoreTiles = async () => {
    if (!selectedCategory || isGeneratingTiles) return;
    
    setIsGeneratingTiles(true);
    
    const category = categories.find(c => c.id === selectedCategory);
    const existingTiles = tiles[selectedCategory] || [];
    const existingNames = existingTiles.map(t => t.name).join(', ');
    
    try {
      // Call your Vercel backend
      const response = await fetch("https://aac-backend.vercel.app/api/generate-tiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryName: category.name,
          stem: category.stem,
          existingTiles: existingNames || 'none'
        })
      });

      const data = await response.json();
      const textContent = data.text || "";
      
      const cleanedText = textContent.replace(/```json|```/g, "").trim();
      const newSuggestions = JSON.parse(cleanedText);
      
      if (Array.isArray(newSuggestions)) {
        const newTiles = newSuggestions.map((suggestion, index) => {
          const tile = {
            id: `ai_${Date.now()}_${index}`,
            name: suggestion.name,
            emoji: suggestion.emoji || '📝',
            isDefault: false,
            isAIGenerated: true
          };
          // For phrases category, add fullPhrase with period format
          if (selectedCategory === 'phrases') {
            tile.fullPhrase = suggestion.name + '.';
          }
          return tile;
        });
        
        setTiles(prev => ({
          ...prev,
          [selectedCategory]: [...(prev[selectedCategory] || []), ...newTiles]
        }));
      }
    } catch (error) {
      console.error("Error generating tiles:", error);
    } finally {
      setIsGeneratingTiles(false);
    }
  };

  const handleDeleteGeneratedTiles = () => {
    if (!selectedCategory) return;
    
    const categoryFavs = favoriteTiles[selectedCategory] || [];
    
    requestPasswordVerification('delete generated tiles', () => {
      setTiles(prev => ({
        ...prev,
        [selectedCategory]: (prev[selectedCategory] || []).filter(tile => 
          !tile.isAIGenerated || categoryFavs.includes(tile.id)
        )
      }));
    });
  };

  const applyImageChange = () => {
    if (popup.target === 'category') {
      setCategories(prev => prev.map(c =>
        c.id === popup.item.id ? { ...c, customImage: editForm.image } : c
      ));
    } else if (popup.target === 'tile') {
      setTiles(prev => ({
        ...prev,
        [popup.categoryId]: prev[popup.categoryId].map(t =>
          t.id === popup.item.id ? { ...t, customImage: editForm.image } : t
        )
      }));
    }
    setEditForm({ value: '', image: null });
    setPopup(null);
  };

  const handleChangeName = () => {
    setPopup({
      type: 'changeName',
      target: contextMenu.type,
      item: contextMenu.item,
      categoryId: contextMenu.categoryId
    });
    setEditForm({ value: contextMenu.item.name, image: null });
    closeContextMenu();
  };

  const handleChangeStem = () => {
    setPopup({
      type: 'changeStem',
      item: contextMenu.item
    });
    setEditForm({ value: contextMenu.item.stem, image: null });
    closeContextMenu();
  };

  const applyNameChange = () => {
    if (popup.target === 'category') {
      setCategories(prev => prev.map(c =>
        c.id === popup.item.id ? { ...c, name: editForm.value } : c
      ));
    } else if (popup.target === 'tile') {
      setTiles(prev => ({
        ...prev,
        [popup.categoryId]: prev[popup.categoryId].map(t =>
          t.id === popup.item.id ? { ...t, name: editForm.value } : t
        )
      }));
    }
    setEditForm({ value: '', image: null });
    setPopup(null);
  };

  const applyStemChange = () => {
    setCategories(prev => prev.map(c =>
      c.id === popup.item.id ? { ...c, stem: editForm.value } : c
    ));
    setEditForm({ value: '', image: null });
    setPopup(null);
  };

  const renderTileImage = (item, size = 'normal') => {
    const sizeClass = size === 'small' ? 'w-10 h-10' : 'w-40 h-40';
    
    if (item.customImage) {
      return <img src={item.customImage} alt={item.name} className={`${sizeClass} object-cover rounded-lg`} />;
    }
    return <span style={{ fontSize: size === 'small' ? '1.875rem' : '10rem', lineHeight: 1 }}>{item.emoji}</span>;
  };

  const isCategoryFavorite = (catId) => favoriteCategories.includes(catId);
  const isTileFavorite = (catId, tileId) => (favoriteTiles[catId] || []).includes(tileId);

  const renderThemeBackground = () => {
    switch (settings.theme) {
      case 'space': return <SpaceBackground />;
      case 'ocean': return <OceanBackground />;
      case 'dinosaurs': return <DinosaurBackground />;
      case 'princess': return <PrincessBackground />;
      default: return null;
    }
  };

  const textStyle = settings.highContrast ? 'text-white' : (settings.theme !== 'default' && settings.theme !== 'ocean' && settings.theme !== 'dinosaurs' && settings.theme !== 'princess' ? 'text-white' : (settings.theme === 'space' ? 'text-white' : 'text-gray-800'));
  const cardStyle = settings.highContrast ? 'bg-gray-900 border-2 border-white' : (settings.theme === 'space' ? 'bg-indigo-800/80' : settings.theme === 'ocean' ? 'bg-cyan-100/90' : settings.theme === 'dinosaurs' ? 'bg-lime-100/90' : settings.theme === 'princess' ? 'bg-pink-100/90' : 'bg-white');

  // Login Page
  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">LOG-IN</h1>
          
          <input
            type="text"
            placeholder="Username"
            value={loginForm.username}
            onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
            className="w-full p-4 border-2 border-gray-200 rounded-xl mb-4 text-lg focus:border-blue-400 focus:outline-none"
            disabled={isLoading}
          />
          
          <input
            type="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full p-4 border-2 border-gray-200 rounded-xl mb-4 text-lg focus:border-blue-400 focus:outline-none"
            disabled={isLoading}
          />
          
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-blue-500 text-white p-4 rounded-xl text-xl font-semibold hover:bg-blue-600 transition mb-4 disabled:bg-gray-400"
          >
            {isLoading ? 'Connecting...' : 'Login'}
          </button>
          
          <button
            onClick={() => setCurrentPage('register')}
            disabled={isLoading}
            className="w-full bg-gray-100 text-gray-700 p-4 rounded-xl text-lg hover:bg-gray-200 transition disabled:bg-gray-50"
          >
            Create New Account
          </button>
          
          {loginError && (
            <p className="text-red-500 text-center mt-4 font-medium">{loginError}</p>
          )}
        </div>
      </div>
    );
  }

  // Register Page
  if (currentPage === 'register') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h1>
          
          <input
            type="text"
            placeholder="Create username"
            value={registerForm.username}
            onChange={(e) => setRegisterForm(prev => ({ ...prev, username: e.target.value }))}
            className="w-full p-4 border-2 border-gray-200 rounded-xl mb-4 text-lg focus:border-blue-400 focus:outline-none"
            disabled={isLoading}
          />
          
          <input
            type="password"
            placeholder="Create password"
            value={registerForm.password}
            onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))}
            className="w-full p-4 border-2 border-gray-200 rounded-xl mb-4 text-lg focus:border-blue-400 focus:outline-none"
            disabled={isLoading}
          />
          
          <input
            type="password"
            placeholder="Confirm password"
            value={registerForm.confirmPassword}
            onChange={(e) => setRegisterForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
            className="w-full p-4 border-2 border-gray-200 rounded-xl mb-4 text-lg focus:border-blue-400 focus:outline-none"
            disabled={isLoading}
          />
          
          <button
            onClick={handleRegister}
            disabled={isLoading}
            className="w-full bg-green-500 text-white p-4 rounded-xl text-xl font-semibold hover:bg-green-600 transition mb-4 disabled:bg-gray-400"
          >
            {isLoading ? 'Creating...' : 'Confirm Registration'}
          </button>
          
          <button
            onClick={() => setCurrentPage('login')}
            disabled={isLoading}
            className="w-full bg-gray-100 text-gray-700 p-4 rounded-xl text-lg hover:bg-gray-200 transition disabled:bg-gray-50"
          >
            Back to Login
          </button>
          
          {registerError && (
            <p className="text-red-500 text-center mt-4 font-medium">{registerError}</p>
          )}
        </div>
      </div>
    );
  }

  // Main Page & Category Pages
  return (
    <div className="min-h-screen relative flex" onClick={closeContextMenu}>
      {/* Theme Background */}
      {!settings.highContrast && renderThemeBackground()}
      {settings.highContrast && <div className="fixed inset-0 bg-black" />}
      {settings.theme === 'default' && !settings.highContrast && <div className="fixed inset-0 bg-gray-50" />}
      
      {/* Left Section - 2/3 */}
      <div className="w-2/3 p-6 flex flex-col border-r-2 border-gray-800 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h1 className={`text-2xl font-bold ${settings.theme === 'space' ? 'text-white' : textStyle}`}>AAC Communication Tool</h1>
            {syncStatus && <span className="text-green-500 text-sm">{syncStatus}</span>}
          </div>
          <div className="flex gap-2">
            {currentPage === 'category' && (
              <button
                onClick={handleCreateTileClick}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-sm font-medium"
              >
                Create Tile
              </button>
            )}
            {currentPage === 'main' && (
              <>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition text-sm font-medium"
                >
                  ⚙️ Settings
                </button>
                <button
                  onClick={handleCreateCategoryClick}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-sm font-medium"
                >
                  Create Category
                </button>
              </>
            )}
            <button
              onClick={handleLogout}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition text-sm font-medium"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Sentence Preview */}
        {currentPage === 'main' && buildSentencePreview().length > 0 && (
          <div className={`${cardStyle} rounded-xl p-4 mb-4 shadow-lg`}>
            <p className={`text-sm opacity-70 mb-2 ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>Building sentence:</p>
            <div className="flex items-center gap-3 flex-wrap">
              {buildSentencePreview().map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-blue-100 rounded-lg px-3 py-2">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-8 h-8 object-cover rounded" />
                  ) : (
                    <span className="text-2xl">{item.emoji}</span>
                  )}
                  <span className="font-medium text-gray-800">{item.name}</span>
                </div>
              ))}
            </div>
            <p className={`mt-2 text-lg font-medium ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>"{buildSentence()}"</p>
          </div>
        )}

        {/* Settings Panel */}
        {showSettings && currentPage === 'main' && (
          <div className={`${cardStyle} rounded-xl p-4 mb-4 shadow-lg`}>
            <h3 className={`font-bold mb-3 ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>Settings</h3>
            <div className="flex flex-col gap-4">
              <label className={`flex items-center gap-3 cursor-pointer ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>
                <input
                  type="checkbox"
                  checked={settings.soundEnabled}
                  onChange={(e) => setSettings(prev => ({ ...prev, soundEnabled: e.target.checked }))}
                  className="w-5 h-5"
                />
                <span>🔊 Sound on tap</span>
              </label>
              
              <label className={`flex items-center gap-3 cursor-pointer ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                  className="w-5 h-5"
                />
                <span>🌓 High contrast mode</span>
              </label>
              
              <div>
                <p className={`mb-2 font-medium ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>🎨 Theme</p>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { id: 'default', name: 'Default' },
                    { id: 'space', name: 'Space' },
                    { id: 'ocean', name: 'Ocean' },
                    { id: 'dinosaurs', name: 'Dinosaurs' },
                    { id: 'princess', name: 'Princess' }
                  ].map(themeOption => (
                    <button
                      key={themeOption.id}
                      onClick={() => setSettings(prev => ({ ...prev, theme: themeOption.id }))}
                      className={`px-4 py-2 rounded-lg transition ${
                        settings.theme === themeOption.id 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {themeOption.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <p className={`mb-2 font-medium ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>🗣️ Voice</p>
                <div className="flex gap-2 flex-wrap">
                  {VOICE_OPTIONS.map(voice => (
                    <button
                      key={voice.id}
                      onClick={() => {
                        setSettings(prev => ({ ...prev, voice: voice.id }));
                        const utterance = new SpeechSynthesisUtterance("Hello!");
                        utterance.rate = voice.rate;
                        utterance.pitch = voice.pitch;
                        window.speechSynthesis.speak(utterance);
                      }}
                      className={`px-4 py-2 rounded-lg transition ${
                        settings.voice === voice.id 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {voice.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Name (when in category view) */}
        {currentPage === 'category' && selectedCategory && (
          <div className="mb-4">
            <button
              onClick={() => setCurrentPage('main')}
              className="text-blue-400 hover:text-blue-300 mb-2 flex items-center gap-1"
            >
              ← Back
            </button>
            <h2 className={`text-xl font-semibold capitalize ${settings.theme === 'space' ? 'text-white' : textStyle}`}>
              {categories.find(c => c.id === selectedCategory)?.name}
            </h2>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {currentPage === 'main' ? (
            <>
              {/* Categories Grid - 3 columns */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {getSortedCategories().map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      playTapSound();
                      setSelectedCategory(category.id);
                      setCurrentPage('category');
                    }}
                    onContextMenu={(e) => handleContextMenu(e, 'category', category)}
                    onTouchStart={(e) => {
                      const timer = setTimeout(() => {
                        handleContextMenu(e.touches[0], 'category', category);
                      }, 500);
                      e.target.longPressTimer = timer;
                    }}
                    onTouchEnd={(e) => {
                      if (e.target.longPressTimer) {
                        clearTimeout(e.target.longPressTimer);
                      }
                    }}
                    onTouchMove={(e) => {
                      if (e.target.longPressTimer) {
                        clearTimeout(e.target.longPressTimer);
                      }
                    }}
                    className={`${getCategoryColor(category)} rounded-2xl shadow-lg p-3 flex flex-col items-center justify-center hover:shadow-xl transition border-4 aspect-square relative`}
                  >
                    {isCategoryFavorite(category.id) && (
                      <span className="absolute top-2 right-2 text-xl">⭐</span>
                    )}
                    <div className="flex items-center justify-center flex-1">
                      {renderTileImage(category)}
                    </div>
                    <span className={`text-lg font-bold mt-2 ${settings.highContrast ? 'text-white' : 'text-gray-800'}`}>{category.name}</span>
                    {currentSelections[category.id] && (
                      <span className="text-xs text-green-600 font-medium">
                        ✓ {currentSelections[category.id].name}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Suggestions Section */}
              {suggestions.length > 0 && (
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${settings.theme === 'space' ? 'text-white' : textStyle}`}>Suggestions</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {suggestions.map(({ categoryId, tile }) => (
                      <button
                        key={`suggestion-${categoryId}-${tile.id}`}
                        onClick={() => handleSuggestionClick(categoryId, tile)}
                        className={`${cardStyle} rounded-xl shadow p-3 flex flex-col items-center justify-center hover:shadow-lg transition border-2 ${
                          currentSelections[categoryId]?.id === tile.id 
                            ? 'border-green-400 bg-green-50' 
                            : 'border-gray-200'
                        }`}
                      >
                        <span className="text-3xl">{tile.customImage ? <img src={tile.customImage} alt={tile.name} className="w-10 h-10 object-cover rounded" /> : tile.emoji}</span>
                        <span className={`mt-1 text-xs font-medium text-center ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>{tile.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Most Used Tiles */}
              {getMostUsedTiles().length > 0 && (
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${settings.theme === 'space' ? 'text-white' : textStyle}`}>Most Used</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {getMostUsedTiles().map(({ categoryId, tile }) => (
                      <button
                        key={`mostused-${categoryId}-${tile.id}`}
                        onClick={() => handleMostUsedTileClick(categoryId, tile)}
                        className={`${cardStyle} rounded-xl shadow p-3 flex flex-col items-center justify-center hover:shadow-lg transition border-2 ${
                          currentSelections[categoryId]?.id === tile.id 
                            ? 'border-green-400 bg-green-50' 
                            : 'border-gray-200'
                        }`}
                      >
                        <span className="text-3xl">{tile.customImage ? <img src={tile.customImage} alt={tile.name} className="w-10 h-10 object-cover rounded" /> : tile.emoji}</span>
                        <span className={`mt-1 text-xs font-medium text-center ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>{tile.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            // Tiles Grid - 3 columns
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-3 gap-4">
                {getSortedTiles(selectedCategory).map(tile => (
                  <button
                    key={tile.id}
                    onClick={() => handleTileClick(selectedCategory, tile)}
                    onContextMenu={(e) => handleContextMenu(e, 'tile', tile, selectedCategory)}
                    onTouchStart={(e) => {
                      const timer = setTimeout(() => {
                        handleContextMenu(e.touches[0], 'tile', tile, selectedCategory);
                      }, 500);
                      e.target.longPressTimer = timer;
                    }}
                    onTouchEnd={(e) => {
                      if (e.target.longPressTimer) {
                        clearTimeout(e.target.longPressTimer);
                      }
                    }}
                    onTouchMove={(e) => {
                      if (e.target.longPressTimer) {
                        clearTimeout(e.target.longPressTimer);
                      }
                    }}
                    className={`${cardStyle} rounded-2xl shadow-lg p-3 flex flex-col items-center justify-center hover:shadow-xl transition border-4 aspect-square relative ${
                      currentSelections[selectedCategory]?.id === tile.id 
                        ? 'border-green-400 bg-green-50' 
                        : 'border-transparent hover:border-blue-300'
                    }`}
                  >
                    {isTileFavorite(selectedCategory, tile.id) && (
                      <span className="absolute top-2 right-2 text-xl">⭐</span>
                    )}
                    <div className="flex items-center justify-center flex-1">
                      {renderTileImage(tile)}
                    </div>
                    <span className={`text-lg font-bold mt-2 ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>{tile.name}</span>
                  </button>
                ))}
              </div>
              
              {/* AI Generate More Button */}
              <div className="mt-6 flex flex-col items-center gap-3">
                <button
                  onClick={handleGenerateMoreTiles}
                  disabled={isGeneratingTiles}
                  className={`py-4 px-8 rounded-xl text-xl font-bold transition shadow-lg flex items-center gap-3 ${
                    isGeneratingTiles 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  {isGeneratingTiles ? (
                    <>
                      <span>⏳</span>
                      Generating...
                    </>
                  ) : (
                    <>
                      <span>✨</span>
                      More Suggestions
                    </>
                  )}
                </button>
                
                {(tiles[selectedCategory] || []).some(tile => tile.isAIGenerated) && (
                  <button
                    onClick={handleDeleteGeneratedTiles}
                    className="py-2 px-6 rounded-lg text-sm font-medium transition shadow bg-red-100 text-red-600 hover:bg-red-200"
                  >
                    🗑️ Delete Generated Tiles (does not delete favorited tiles)
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Section - 1/3 History */}
      <div className={`w-1/3 p-6 relative z-10 flex flex-col ${cardStyle}`}>
        {/* Done Button at top */}
        {currentPage === 'main' && (
          <button
            onClick={handleDone}
            className="mb-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-6 px-8 rounded-2xl text-3xl font-bold hover:opacity-90 transition shadow-xl flex items-center justify-center gap-3"
          >
            <span className="text-5xl">🏁</span> Done
          </button>
        )}
        
        {currentSentence && (
          <div className="flex items-start gap-2 mb-4">
            <p className={`text-xl font-medium ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>{currentSentence}</p>
            <button
              onClick={() => speak(currentSentence)}
              className="text-2xl hover:scale-110 transition"
              title="Speak again"
            >
              🔊
            </button>
          </div>
        )}
        
        <div className="border-b-2 border-black mb-4"></div>
        
        <h2 className="text-xl font-semibold text-gray-400 mb-2">History</h2>
        
        <div className="space-y-2 flex-1 overflow-auto">
          {[...history].reverse().map((sentence, idx) => (
            <p key={idx} className="text-gray-400 text-lg">{sentence}</p>
          ))}
        </div>
      </div>

      {/* Password Verification Popup */}
      {passwordPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={() => {
                setPasswordPopup(null);
                setPasswordInput('');
                setPasswordError('');
              }}
              className="absolute top-4 right-4 text-red-500 text-2xl font-bold hover:text-red-700"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">🔒 Enter Password</h3>
            <p className="text-gray-600 mb-4">Enter your password to {passwordPopup.action}</p>
            <input
              type="password"
              placeholder="Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  verifyPassword(passwordPopup.callback);
                }
              }}
              className="w-full p-3 border-2 border-gray-200 rounded-xl mb-4 focus:border-blue-400 focus:outline-none"
              autoFocus
            />
            {passwordError && (
              <p className="text-red-500 text-sm mb-4">{passwordError}</p>
            )}
            <button
              onClick={() => verifyPassword(passwordPopup.callback)}
              className="w-full bg-blue-500 text-white p-3 rounded-xl font-semibold hover:bg-blue-600"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* Context Menu */}
      {contextMenu && (
        <div
          className="fixed bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
          style={{ left: contextMenu.x, top: contextMenu.y }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleToggleFavorite}
            className="w-full px-4 py-2 text-left hover:bg-yellow-100 text-gray-700"
          >
            {(contextMenu.type === 'category' && isCategoryFavorite(contextMenu.item.id)) ||
             (contextMenu.type === 'tile' && isTileFavorite(contextMenu.categoryId, contextMenu.item.id))
              ? '⭐ Remove from Favorites'
              : '⭐ Add to Favorites'}
          </button>
          <button
            onClick={handleChangeImage}
            className="w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700"
          >
            Change Image
          </button>
          {!contextMenu.item.isDefault && contextMenu.item.customImage && (
            <button
              onClick={handleDeleteImage}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700"
            >
              Delete Image
            </button>
          )}
          {contextMenu.type === 'category' && !contextMenu.item.isDefault && (
            <>
              <button
                onClick={handleChangeName}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700"
              >
                Change Category Name
              </button>
              <button
                onClick={handleChangeStem}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700"
              >
                Change Sentence Stem
              </button>
              <button
                onClick={handleDeleteCategory}
                className="w-full px-4 py-2 text-left hover:bg-red-100 text-red-600"
              >
                Delete Category
              </button>
            </>
          )}
          {contextMenu.type === 'tile' && !contextMenu.item.isDefault && (
            <>
              <button
                onClick={handleChangeName}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700"
              >
                Change Tile Name
              </button>
              <button
                onClick={handleDeleteTile}
                className="w-full px-4 py-2 text-left hover:bg-red-100 text-red-600"
              >
                Delete Tile
              </button>
            </>
          )}
        </div>
      )}

      {/* Popups */}
      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={() => {
                setPopup(null);
                setNewCategoryForm({ name: '', image: null, stem: '' });
                setNewTileForm({ name: '', image: null });
                setEditForm({ value: '', image: null });
                setCategoryError('');
                setTileError('');
              }}
              className="absolute top-4 right-4 text-red-500 text-2xl font-bold hover:text-red-700"
            >
              ×
            </button>

            {popup.type === 'createCategory' && (
              <>
                <h3 className="text-xl font-bold mb-4">Create Category</h3>
                <input
                  type="text"
                  placeholder="New category name"
                  value={newCategoryForm.name}
                  onChange={(e) => setNewCategoryForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl mb-4 focus:border-blue-400 focus:outline-none"
                />
                <label className="block mb-4">
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-200 inline-block">
                    Upload Image <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'newCategory')}
                    className="hidden"
                  />
                  {newCategoryForm.image && <span className="ml-2 text-green-600">✓ Image uploaded</span>}
                </label>
                <input
                  type="text"
                  placeholder="Create sentence stem (e.g., 'I need help with ')"
                  value={newCategoryForm.stem}
                  onChange={(e) => setNewCategoryForm(prev => ({ ...prev, stem: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl mb-4 focus:border-blue-400 focus:outline-none"
                />
                {categoryError && (
                  <p className="text-red-500 text-sm mb-4">{categoryError}</p>
                )}
                <button
                  onClick={createCategory}
                  className="w-full bg-green-500 text-white p-3 rounded-xl font-semibold hover:bg-green-600"
                >
                  Confirm
                </button>
              </>
            )}

            {popup.type === 'createTile' && (
              <>
                <h3 className="text-xl font-bold mb-4">Create Tile</h3>
                <input
                  type="text"
                  placeholder="Create tile name"
                  value={newTileForm.name}
                  onChange={(e) => setNewTileForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl mb-4 focus:border-blue-400 focus:outline-none"
                />
                <label className="block mb-4">
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-200 inline-block">
                    Upload Image <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'newTile')}
                    className="hidden"
                  />
                  {newTileForm.image && <span className="ml-2 text-green-600">✓ Image uploaded</span>}
                </label>
                {tileError && (
                  <p className="text-red-500 text-sm mb-4">{tileError}</p>
                )}
                <button
                  onClick={createTile}
                  className="w-full bg-green-500 text-white p-3 rounded-xl font-semibold hover:bg-green-600"
                >
                  Confirm
                </button>
              </>
            )}

            {popup.type === 'changeImage' && (
              <>
                <h3 className="text-xl font-bold mb-4">Change Image</h3>
                <label className="block mb-4">
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-200 inline-block">
                    Attach Image
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'edit')}
                    className="hidden"
                  />
                  {editForm.image && <span className="ml-2 text-green-600">✓ Image uploaded</span>}
                </label>
                <button
                  onClick={applyImageChange}
                  className="w-full bg-green-500 text-white p-3 rounded-xl font-semibold hover:bg-green-600"
                  disabled={!editForm.image}
                >
                  Confirm
                </button>
              </>
            )}

            {popup.type === 'changeName' && (
              <>
                <h3 className="text-xl font-bold mb-4">Change Name</h3>
                <input
                  type="text"
                  placeholder="New name"
                  value={editForm.value}
                  onChange={(e) => setEditForm(prev => ({ ...prev, value: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl mb-4 focus:border-blue-400 focus:outline-none"
                />
                <button
                  onClick={applyNameChange}
                  className="w-full bg-green-500 text-white p-3 rounded-xl font-semibold hover:bg-green-600"
                >
                  Confirm
                </button>
              </>
            )}

            {popup.type === 'changeStem' && (
              <>
                <h3 className="text-xl font-bold mb-4">Change Sentence Stem</h3>
                <input
                  type="text"
                  placeholder="New sentence stem"
                  value={editForm.value}
                  onChange={(e) => setEditForm(prev => ({ ...prev, value: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl mb-4 focus:border-blue-400 focus:outline-none"
                />
                <button
                  onClick={applyStemChange}
                  className="w-full bg-green-500 text-white p-3 rounded-xl font-semibold hover:bg-green-600"
                >
                  Confirm
                </button>
              </>
            )}

            {popup.type === 'confirmDeleteCategory' && (
              <>
                <h3 className="text-xl font-bold mb-4 text-red-600">Delete Category</h3>
                <p className="text-gray-700 mb-6">
                  Deleting this category is permanent. Would you like to delete it?
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={confirmDeleteCategory}
                    className="flex-1 bg-red-500 text-white p-3 rounded-xl font-semibold hover:bg-red-600"
                  >
                    Delete Anyway
                  </button>
                  <button
                    onClick={() => setPopup(null)}
                    className="flex-1 bg-gray-200 text-gray-700 p-3 rounded-xl font-semibold hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
