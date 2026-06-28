import { Project, Skill } from './types';

export const initialProjects: Project[] = [
  {
    id: 'iqlaa-chatbot',
    title: 'IQLAA: Dialectal AI Chatbot for Drug Addiction Support',
    domain: 'NLP / LLM / RAG',
    desc: 'A specialized hybrid AI chatbot designed to support individuals struggling with drug addiction in Algeria. Combines a fine-tuned Qwen 2.5 7B model (LoRA on Unsloth) for empathetic counselling in Algerian Darija and Arabizi, with a RAG system grounded in WHO & INSP medical data, and a two-stage triage layer using MARBERT to detect risk and out-of-domain queries.',
    url: 'https://github.com/messahelhibetallah',
    tags: ['Python', 'FastAPI', 'Qwen LLM', 'RAG', 'ChromaDB', 'MARBERT', 'Unsloth', 'React']
  },
  {
    id: 'el9anoni-graphrag',
    title: 'GraphRAG El9anoni',
    domain: 'Knowledge Graphs / NLP',
    desc: 'A Graph-based Retrieval-Augmented Generation (GraphRAG) assistant for Algerian Law ("El9anoni"). Synthesizes complex judicial codes and legal texts into structured knowledge graphs, allowing high-precision query answering and legal reasoning over Algerian legal articles and precedents.',
    url: 'https://github.com/FayzaRouibi/Graph_Rag-El9anoni-.git',
    tags: ['Python', 'GraphRAG', 'Knowledge Graphs', 'LlamaIndex', 'Neo4j', 'NLP']
  },
  {
    id: 'eeg-sleep-stage',
    title: 'EEG Sleep Stage Classification',
    domain: 'Biomedical AI',
    desc: 'Automatic sleep stage classification from EEG signals using Transformer architecture (TSAC). Processes raw physiological signals to identify sleep stages (Wake, N1, N2, N3, REM) with attention-based sequence modeling.',
    url: 'https://github.com/messahelhibetallah/TSAC-EEG-Sleep-Stage-Classification',
    tags: ['Python', 'PyTorch', 'Transformer', 'EEG', 'Time Series']
  },
  {
    id: 'transformer-scratch',
    title: 'Transformer from Scratch',
    domain: 'NLP / LLM',
    desc: 'Full implementation of the original "Attention Is All You Need" architecture from the ground up — encoder-decoder blocks, multi-head attention, positional encoding, and training loop without using high-level Transformer libraries.',
    url: 'https://github.com/messahelhibetallah/Transformer-from-scratch',
    tags: ['Python', 'PyTorch', 'Attention', 'NLP']
  },
  {
    id: 'malware-class',
    title: 'Malware Classification — Sandbox Analysis',
    domain: 'Cybersecurity AI',
    desc: 'Classification of malware from sandbox dynamic analysis reports. Extracts behavioral features from runtime traces to identify and categorize malicious software families using ML models.',
    url: 'https://github.com/hadj3r/Classification_of_Sandbox_Dynamic_Analysis',
    tags: ['Python', 'scikit-learn', 'Classification', 'Security']
  },
  {
    id: 'rl-project',
    title: 'RL Project',
    domain: 'Reinforcement Learning',
    desc: 'Reinforcement learning implementation covering policy-based and value-based agents. Experiments with environment interaction, reward shaping, and agent training across standard RL benchmarks.',
    url: 'https://github.com/B4Anis/rl-project',
    tags: ['Python', 'PyTorch', 'Gym', 'DQN']
  },
  {
    id: 'agri-planning',
    title: 'Agricultural Land Production Planning',
    domain: 'Applied ML',
    desc: 'ML-driven system for optimizing agricultural land use and crop production planning. Uses predictive models trained on soil, climate, and yield data to recommend optimal planning strategies.',
    url: 'https://github.com/messahelhibetallah/Agricultural-Land-Production-Planning',
    tags: ['Python', 'ML', 'Optimization', 'Data Analysis']
  },
  {
    id: 'timer-chronos',
    title: 'Timer Chronos',
    domain: 'Software',
    desc: 'A timer and chronometer application — clean, functional time-tracking tool built with a focus on usability and accurate timing logic.',
    url: 'https://github.com/messahelhibetallah/timer-chronos',
    tags: ['Software Dev', 'UI/UX']
  },
  {
    id: 'snake-game',
    title: 'Healthy Snake Game',
    domain: 'Software',
    desc: 'A twist on the classic Snake game with a healthy eating theme. Built from scratch with game logic, collision detection, scoring, and a food-nutrition mechanic.',
    url: 'https://github.com/messahelhibetallah/healthy-snake-game-',
    tags: ['Game Dev', 'Python', 'Pygame']
  }
];

export const initialSkills: Skill[] = [
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    icon: '🧠',
    desc: 'Building and training neural architectures from CNNs to Transformers.',
    tags: ['PyTorch', 'TensorFlow', 'Keras', 'Transformers']
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    icon: '📊',
    desc: 'Classical ML, feature engineering, model evaluation and selection.',
    tags: ['scikit-learn', 'XGBoost', 'pandas', 'numpy']
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    icon: '👁️',
    desc: 'Image classification, segmentation, object detection and optical flow.',
    tags: ['OpenCV', 'YOLO', 'U-Net', 'CNNs']
  },
  {
    id: 'reinforcement-learning',
    name: 'Reinforcement Learning',
    icon: '🎓',
    desc: 'Value-based and policy-gradient methods, deep RL agents.',
    tags: ['DQN', 'DDPG', 'OpenAI Gym']
  },
  {
    id: 'hpc',
    name: 'High Performance Computing',
    icon: '⚡',
    desc: 'Parallel programming and GPU-accelerated computation.',
    tags: ['CUDA', 'OpenMPI', 'NCCL']
  },
  {
    id: 'data-eng',
    name: 'Data Engineering',
    icon: '🗄️',
    desc: 'Large-scale data processing, distributed systems and pipelines.',
    tags: ['Spark', 'Hadoop', 'Kafka', 'Hive']
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: '💻',
    desc: 'From prototyping to production-ready implementations.',
    tags: ['Python', 'C++', 'Java', 'SQL']
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    icon: '🔧',
    desc: 'Modern ML development and version control workflows.',
    tags: ['Git', 'Docker', 'Jupyter', 'Linux']
  }
];
