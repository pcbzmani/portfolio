:root {
    --bg-color: #050505;
    --text-primary: #ffffff;
    --text-secondary: #a3a3a3;
    --accent: #00d2ff;
    --accent-secondary: #3a7bd5;
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --card-hover: rgba(255, 255, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Outfit', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-primary);
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}

#bg-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    z-index: 1;
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 6rem 0 4rem;
    animation: fadeIn 1s ease-out;
}

.profile-image-container {
    width: 120px;
    height: 120px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #00d2ff, #3a7bd5);
    padding: 3px;
    box-shadow: 0 0 20px rgba(0, 210, 255, 0.3);
    position: relative;
    overflow: hidden;
}

.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
}

.profile-image-container::before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00d2ff, #3a7bd5);
    z-index: -1;
    filter: blur(10px);
    opacity: 0.7;
}

h1.glitch {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    position: relative;
    text-shadow: 2px 2px var(--accent-secondary);
    color: var(--text-primary);
}

.subtitle {
    font-size: 1.8rem;
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 1rem;
    text-shadow: 0 0 20px rgba(0, 210, 255, 0.4);
}

.location {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--glass-bg);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    border: 1px solid var(--glass-border);
}

/* Resume Button */
.resume-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 2rem;
    margin-top: 1.5rem;
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1.1rem;
    box-shadow: 0 4px 15px rgba(0, 210, 255, 0.3);
    transition: all 0.3s ease;
}

.resume-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 210, 255, 0.5);
}

/* Social Buttons */
.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.social-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: white;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.social-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: 0.5s;
}

.social-btn:hover::before {
    transform: translateX(100%);
}

.social-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
}

.email {
    background: rgba(255, 255, 255, 0.1);
}

.email:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

.linkedin {
    background: rgba(0, 119, 181, 0.2);
}

.linkedin:hover {
    background: rgba(0, 119, 181, 0.4);
    box-shadow: 0 0 20px rgba(0, 119, 181, 0.4);
}

.medium {
    background: rgba(255, 255, 255, 0.1);
}

.medium:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

.github {
    background: rgba(51, 51, 51, 0.4);
}

.github:hover {
    background: rgba(51, 51, 51, 0.6);
    box-shadow: 0 0 20px rgba(51, 51, 51, 0.4);
}


/* Sections */
main {
    margin-top: 4rem;
}

section {
    margin-bottom: 6rem;
}

h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--text-primary);
}

h3::after {
    content: '';
    height: 1px;
    flex-grow: 1;
    background: linear-gradient(to right, var(--accent), transparent);
    opacity: 0.5;
}

.glass-panel {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    padding: 2.5rem;
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.about p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    line-height: 1.8;
}

.about strong {
    color: var(--text-primary);
    font-weight: 600;
}

/* Cards */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.card {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 2rem;
    text-decoration: none;
    color: var(--text-primary);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.card:hover {
    transform: translateY(-10px) scale(1.02);
    background: var(--card-hover);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.card-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.card-glow {
    position: absolute;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
    border-radius: 50%;
    top: -50px;
    right: -50px;
    opacity: 0;
    transition: opacity 0.5s;
    filter: blur(20px);
    pointer-events: none;
}

.card:hover .card-glow {
    opacity: 0.4;
}

.tag {
    display: inline-block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--accent);
    margin-bottom: 1rem;
    font-weight: 700;
    background: rgba(0, 210, 255, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    border: 1px solid rgba(0, 210, 255, 0.2);
}

.card h4 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.card p {
    color: var(--text-secondary);
    font-size: 1rem;
    margin-bottom: 2rem;
    flex-grow: 1;
}

.read-more {
    font-size: 0.95rem;
    color: var(--accent);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
}

.read-more i {
    transition: transform 0.3s;
}

.card:hover .read-more i {
    transform: translateX(5px);
}

/* Project Description Styles */
.project-desc {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem !important;
}

.project-desc strong {
    color: var(--text-primary);
}

.job-details {
    list-style-type: none;
    margin-top: 1rem;
    padding-left: 0.5rem;
}

.job-details li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.job-details li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent);
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

/* Responsive */
@media (max-width: 768px) {
    h1.glitch {
        font-size: 2.5rem;
    }

    .container {
        padding: 1.5rem;
    }

    .hero {
        padding: 4rem 0 2rem;
    }

    .social-links {
        flex-direction: column;
        padding: 0 2rem;
    }

    .social-btn {
        width: 100%;
        justify-content: center;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
