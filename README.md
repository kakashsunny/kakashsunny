<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>K. AKASH | NEURAL_CORE.v27</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;500;700;900&family=VT323&display=swap');

        :root {
            --neon-cyan: #00f5ff;
            --neon-pink: #ff00aa;
            --neon-purple: #7b61ff;
            --dark-bg: #050010;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, #0a001f 0%, #000000 100%);
            color: #c8d8e8;
            font-family: 'Share Tech Mono', monospace;
            overflow-x: hidden;
            min-height: 100vh;
            position: relative;
        }

        /* Animated Background */
        .bg-grid {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(var(--neon-cyan) 1px, transparent 1px),
                linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px);
            background-size: 60px 60px;
            opacity: 0.08;
            animation: gridMove 25s linear infinite;
            z-index: -2;
        }

        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }

        .hero {
            position: relative;
            padding: 40px 20px 20px;
            text-align: center;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(0, 245, 255, 0.15) 0%, transparent 70%);
            animation: pulse-glow 8s ease-in-out infinite;
            z-index: -1;
        }

        .capsule-3d {
            filter: drop-shadow(0 0 40px var(--neon-cyan)) 
                    drop-shadow(0 0 80px var(--neon-purple));
            transform: perspective(1000px) rotateX(8deg);
            transition: transform 0.4s ease;
        }

        .capsule-3d:hover {
            transform: perspective(1000px) rotateX(0deg) scale(1.03);
        }

        .neon-text {
            font-family: 'Orbitron', sans-serif;
            text-shadow: 
                0 0 10px var(--neon-cyan),
                0 0 20px var(--neon-cyan),
                0 0 40px var(--neon-pink),
                0 0 80px var(--neon-purple);
            animation: neon-flicker 1.5s infinite alternate;
        }

        .status-bar {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            margin: 30px 0;
        }

        .badge {
            transition: all 0.3s ease;
            box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
        }

        .badge:hover {
            transform: translateY(-8px) scale(1.08) rotate(2deg);
            box-shadow: 0 0 40px var(--neon-cyan);
        }

        .section {
            margin: 50px auto;
            max-width: 1100px;
            padding: 0 20px;
        }

        .glass {
            background: rgba(5, 0, 16, 0.75);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(123, 97, 255, 0.3);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 0 30px rgba(123, 97, 255, 0.2);
        }

        .terminal {
            background: #0a001f;
            border-left: 6px solid var(--neon-cyan);
            font-family: 'VT323', monospace;
            padding: 25px;
            border-radius: 8px;
            box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.8);
        }

        @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 60px 60px; }
        }

        @keyframes pulse-glow {
            0%, 100% { opacity: 0.6; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes neon-flicker {
            0% { text-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 40px #ff00aa; }
            100% { text-shadow: 0 0 15px #00f5ff, 0 0 30px #00f5ff, 0 0 60px #7b61ff; }
        }

        h1, h2 {
            font-family: 'Orbitron', sans-serif;
        }
    </style>
</head>
<body>

    <!-- Background Elements -->
    <div class="bg-grid"></div>
    <div class="particles" id="particles"></div>

    <div class="hero">
        <!-- Enhanced 3D Hero -->
        <img width="100%" class="capsule-3d" 
             src="https://capsule-render.vercel.app/api?type=venom&height=380&text=K.%20AKASH&fontSize=120&color=0:000005,30:050010,60:000815,100:000005&stroke=00f5ff&strokeWidth=3&fontColor=00f5ff&animation=fadeIn&desc=%E2%96%B6%20NEURAL__CORE.v27%20%E2%9C%A8%20AI%20GENERALIST%20%7C%20BUILDER%20%7C%20EXPLORER%20%E2%97%80&descSize=18&descAlignY=82&descColor=7b61ff&fontAlignY=42" 
             alt="K. AKASH - Neural Core">
        
        <div style="margin-top: 20px;">
            <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=28&duration=1800&pause=800&color=00F5FF&center=true&vCenter=true&repeat=true&width=820&height=70&lines=%5BBOOT%5D%20NEURAL_CORE.v27%20INITIALIZED...%20%E2%9C%93;%5BSCAN%5D%20AI%20Generalist%20%7C%20Builder%20%7C%20Explorer%20%E2%9C%93;%5BWIN%5D%20IEEE%20Cognitive%20Combat%20%E2%9A%94%EF%B8%8F%201st%20Place;%5BSTATUS%5D%20%E2%9F%A6%20ONLINE%20%7C%20BUILDING%20THE%20FUTURE%20%E2%9F%A7" alt="Typing">
        </div>
    </div>

    <!-- Live Status -->
    <div class="status-bar">
        <img class="badge" src="https://img.shields.io/badge/%E2%96%B6_STATUS-ONLINE-00ff88?style=for-the-badge&labelColor=050010&color=00ff88" alt="Status">
        <img class="badge" src="https://img.shields.io/badge/NODE-BENGALURU__IND-00f5ff?style=for-the-badge&labelColor=050010" alt="Node">
        <img class="badge" src="https://img.shields.io/badge/CLASS-AI__GENERALIST-7b61ff?style=for-the-badge&labelColor=050010" alt="Class">
        <img class="badge" src="https://img.shields.io/badge/THREAT_LVL-CREATIVE_MAX-ff00aa?style=for-the-badge&labelColor=050010" alt="Threat">
        <img class="badge" src="https://img.shields.io/badge/BUILD-v27.2026-ff6b00?style=for-the-badge&labelColor=050010" alt="Build">
    </div>

    <div class="section glass">
        <h2 style="text-align:center; margin-bottom:30px; color:var(--neon-cyan);" class="neon-text">⟩ whoami --verbose --3d</h2>
        <div class="terminal">
            <pre style="color:#00f5ff; line-height:1.6;">
#!/usr/bin/env python3
# NEURAL_CORE.v27 · QUANTUM PROFILE · CLASSIFIED Ω

class KAkash:
    ALIAS      = "NEURAL_CORE.v27"
    CLEARANCE  = "BUILDER_CLASS_Ω+"
    DIMENSION  = "3D_NEON_REALM"

    def __init__(self):
        self.name       = "K. Akash"
        self.location   = "Bengaluru, Karnataka, India 🇮🇳"
        self.role       = ["AI Generalist", "Full-Stack Builder", "Digital Explorer"]
        self.status     = "🟢 ONLINE — Pushing Boundaries"
        self.motto      = "Continue Learning, Continue Exploring ∞"

    def current_missions(self):
        return [
            "⚡ Advanced Generative AI & Agentic Systems",
            "☁️ Google Cloud | Vertex AI | Multi-Modal Models",
            "🐍 Python · MLOps · Production AI",
            "🧬 Building Autonomous AI Agents & RAG Pipelines",
            "🌐 Full-Stack AI Applications @ Scale"
        ]

boot = KAkash()
print("[QUANTUM_BOOT] Neural Core v27 awakened in 3D space")
            </pre>
        </div>
    </div>

    <!-- Tech Stack with 3D hover -->
    <div class="section">
        <h2 style="text-align:center; color:var(--neon-purple); margin-bottom:25px;" class="neon-text">⟩ ls ./tech-stack --recursive --dimensional</h2>
        
        <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:15px; margin:30px 0;">
            <img class="badge" src="https://img.shields.io/badge/Python-3775A8?style=for-the-badge&logo=python&logoColor=white" alt="Python">
            <img class="badge" src="https://img.shields.io/badge/LLMs-FF6B00?style=for-the-badge&logo=openai&logoColor=white" alt="LLMs">
            <img class="badge" src="https://img.shields.io/badge/LangChain-7b61ff?style=for-the-badge&logo=chainlink&logoColor=white" alt="LangChain">
            <img class="badge" src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" alt="GCP">
            <img class="badge" src="https://img.shields.io/badge/Vertex_AI-00f5ff?style=for-the-badge&logo=google&logoColor=black" alt="Vertex">
        </div>
    </div>

    <!-- Achievements -->
    <div class="section glass">
        <h2 style="text-align:center; color:#ff00aa; margin-bottom:30px;" class="neon-text">⟩ cat achievements.log --trophy</h2>
        <div style="display:flex; justify-content:center; gap:30px; flex-wrap:wrap;">
            <div style="text-align:center; padding:20px; border:1px solid rgba(255,0,170,0.3); border-radius:16px; width:300px;">
                <h3>🥇 IEEE Cognitive Combat</h3>
                <p><strong>1st Place • Techno Whiz '25</strong></p>
            </div>
            <div style="text-align:center; padding:20px; border:1px solid rgba(0,245,255,0.3); border-radius:16px; width:300px;">
                <h3>🐍 Python Grade A</h3>
                <p>IANT Computer Education • 2024</p>
            </div>
        </div>
    </div>

    <!-- GitHub Stats -->
    <div class="section" style="text-align:center;">
        <h2 style="color:var(--neon-cyan); margin-bottom:20px;" class="neon-text">⟩ github --stats --neon-3d</h2>
        <img height="200" src="https://github-readme-stats.vercel.app/api?username=kakashsunny&show_icons=true&bg_color=050010&title_color=00f5ff&text_color=c8d8e8&icon_color=ff00aa&border_color=00f5ff&border_radius=20&include_all_commits=true&count_private=true" alt="Stats">
        <br><br>
        <img height="200" src="https://github-readme-streak-stats.herokuapp.com/?user=kakashsunny&theme=tokyonight&border_radius=20&ring=00f5ff&fire=ff00aa" alt="Streak">
    </div>

    <script>
        // Simple Particle System
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.background = Math.random() > 0.5 ? '#00f5ff' : '#7b61ff';
            particle.style.borderRadius = '50%';
            particle.style.opacity = Math.random() * 0.6 + 0.3;
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = '-10px';
            document.getElementById('particles').appendChild(particle);

            let y = -10;
            const speed = Math.random() * 3 + 1;

            const animate = setInterval(() => {
                y += speed;
                particle.style.top = y + 'px';
                particle.style.opacity = 1 - (y / window.innerHeight);

                if (y > window.innerHeight) {
                    clearInterval(animate);
                    particle.remove();
                }
            }, 30);
        }

        setInterval(createParticle, 80);
    </script>

    <div style="text-align:center; padding:40px; color:#555; font-size:14px;">
        NEURAL_CORE.v27 • Built with Cyber-Neon Energy • K. Akash
    </div>
</body>
</html>