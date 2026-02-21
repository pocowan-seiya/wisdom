import re

with open('app/starter-kit.css', 'r') as f:
    css = f.read()

# 1. Update Layout
css = re.sub(r'\.sk-layout\s*\{[^}]*\}', 
    '.sk-layout {\n    font-family: var(--font-noto-sans-jp), var(--font-inter), "Hiragino Sans", "Hiragino Kaku Gothic ProN", sans-serif;\n    color: #1A202C;\n    background: #F8FAFC;\n    min-height: 100vh;\n    position: relative;\n}', css)

css = re.sub(r'\.sk-landing\s*\{[^}]*\}', 
    '.sk-landing {\n    min-height: 100vh;\n    background: radial-gradient(circle at 50% 0%, #FFFFFF 0%, #F1F5F9 100%);\n    position: relative;\n    z-index: 1;\n}', css)

css = re.sub(r'\.sk-hero\s*\{[^}]*\}', 
    '.sk-hero {\n    position: relative;\n    text-align: center;\n    padding: 60px 24px 36px;\n    overflow: hidden;\n    background: transparent;\n    z-index: 2;\n}', css)

# 2. Update Glows for more "Clear Energy and Expansion"
css = re.sub(r'\.sk-hero-glow-1\s*\{[^}]*\}', 
    '.sk-hero-glow-1 {\n    top: -150px;\n    left: -100px;\n    width: 600px;\n    height: 600px;\n    background: #00E5FF;\n    filter: blur(150px);\n    opacity: 0.08;\n    animation: sk-glow-drift 15s ease-in-out infinite alternate;\n}', css)

css = re.sub(r'\.sk-hero-glow-2\s*\{[^}]*\}', 
    '.sk-hero-glow-2 {\n    bottom: -150px;\n    right: -100px;\n    width: 700px;\n    height: 700px;\n    background: #8B5CF6;\n    filter: blur(160px);\n    opacity: 0.06;\n    animation: sk-glow-drift 18s ease-in-out infinite alternate-reverse;\n}', css)

# Add a third central glow
if '.sk-hero-glow-3' not in css:
    css = css.replace('.sk-hero-glow-2 {', '.sk-hero-glow-3 {\n    top: 20%;\n    left: 40%;\n    width: 500px;\n    height: 500px;\n    background: #FDE047;\n    filter: blur(140px);\n    opacity: 0.05;\n    animation: sk-glow-drift 20s ease-in-out infinite alternate;\n}\n\n.sk-hero-glow-2 {')

# 3. Typography
css = re.sub(r'\.sk-hero-title\s*\{[^}]*\}', 
    '.sk-hero-title {\n    font-size: 38px;\n    font-weight: 800;\n    line-height: 1.4;\n    letter-spacing: 0.08em;\n    color: #0F172A;\n    margin-bottom: 20px;\n}', css)

css = re.sub(r'\.sk-hero-title-accent\s*\{[^}]*\}', 
    '.sk-hero-title-accent {\n    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n}', css)

css = re.sub(r'\.sk-hero-eyebrow\s*\{[^}]*\}', 
    '.sk-hero-eyebrow {\n    font-family: var(--font-inter), sans-serif;\n    font-size: 13px;\n    font-weight: 600;\n    letter-spacing: 4px;\n    text-transform: uppercase;\n    color: #64748B;\n    margin-bottom: 20px;\n}', css)

css = re.sub(r'\.sk-hero-description\s*\{[^}]*\}', 
    '.sk-hero-description {\n    font-size: 15px;\n    line-height: 2;\n    color: #475569;\n    font-weight: 400;\n    letter-spacing: 0.05em;\n}', css)

# 4. Cards Glassmorphism
css = re.sub(r'\.sk-card\s*\{[^}]*\}', 
    '.sk-card {\n    position: relative;\n    background: rgba(255, 255, 255, 0.6);\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    border: 1px solid rgba(255, 255, 255, 0.9);\n    border-radius: 24px;\n    padding: 44px 32px 36px;\n    text-align: center;\n    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n    cursor: pointer;\n    box-shadow: 0 10px 40px rgba(15, 23, 42, 0.03), inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n}', css)

css = re.sub(r'\.sk-card:hover\s*\{[^}]*\}', 
    '.sk-card:hover {\n    transform: translateY(-8px);\n    box-shadow: 0 24px 64px rgba(15, 23, 42, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 1);\n    background: rgba(255, 255, 255, 0.9);\n    border-color: rgba(255, 255, 255, 1);\n}', css)

css = re.sub(r'\.sk-card-title\s*\{[^}]*\}', 
    '.sk-card-title {\n    font-size: 21px;\n    font-weight: 700;\n    letter-spacing: 0.05em;\n    color: #0F172A;\n    margin-bottom: 8px;\n}', css)

css = re.sub(r'\.sk-card-description\s*\{[^}]*\}', 
    '.sk-card-description {\n    font-size: 14px;\n    line-height: 1.9;\n    color: #64748B;\n    font-weight: 400;\n    margin-bottom: 24px;\n}', css)

# Prep Card
css = re.sub(r'\.sk-prep-card\s*\{[^}]*\}', 
    '.sk-prep-card {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n    padding: 28px 32px;\n    background: rgba(255, 255, 255, 0.7);\n    backdrop-filter: blur(20px);\n    border: 1px solid rgba(255, 255, 255, 0.9);\n    border-radius: 20px;\n    text-decoration: none;\n    color: inherit;\n    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n    cursor: pointer;\n    box-shadow: 0 8px 32px rgba(15, 23, 42, 0.03);\n}', css)

css = re.sub(r'\.sk-prep-card:hover\s*\{[^}]*\}', 
    '.sk-prep-card:hover {\n    transform: translateY(-4px);\n    box-shadow: 0 16px 48px rgba(139, 92, 246, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 1);\n    background: rgba(255, 255, 255, 0.95);\n}', css)

css = re.sub(r'\.sk-prep-card-icon\s*\{[^}]*\}', 
    '.sk-prep-card-icon {\n    flex-shrink: 0;\n    width: 56px;\n    height: 56px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);\n    color: #fff;\n    border-radius: 16px;\n    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.25);\n}', css)

css = re.sub(r'\.sk-prep-card-title\s*\{[^}]*\}', 
    '.sk-prep-card-title {\n    font-size: 19px;\n    font-weight: 700;\n    letter-spacing: 0.05em;\n    margin: 0 0 6px 0;\n    color: #0F172A;\n}', css)

css = re.sub(r'\.sk-prep-card-label\s*\{[^}]*\}', 
    '.sk-prep-card-label {\n    display: inline-block;\n    font-size: 11px;\n    font-weight: 700;\n    letter-spacing: 0.1em;\n    color: #7C3AED;\n    background: rgba(139, 92, 246, 0.1);\n    padding: 4px 12px;\n    border-radius: 20px;\n    margin-bottom: 8px;\n}', css)

# Guide Banner 
css = re.sub(r'\.sk-guide-banner-link\s*\{[^}]*\}', 
    '.sk-guide-banner-link {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding: 20px 28px;\n    background: rgba(255, 255, 255, 0.65);\n    backdrop-filter: blur(12px);\n    border: 1px solid rgba(255, 255, 255, 0.8);\n    border-radius: 16px;\n    text-decoration: none;\n    color: inherit;\n    transition: all 0.4s ease;\n    cursor: pointer;\n    box-shadow: 0 4px 24px rgba(15, 23, 42, 0.03);\n}', css)

css = re.sub(r'\.sk-guide-banner-link:hover\s*\{[^}]*\}', 
    '.sk-guide-banner-link:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 12px 32px rgba(15, 23, 42, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 1);\n    background: rgba(255, 255, 255, 0.9);\n}', css)

css = re.sub(r'\.sk-guide-banner-badge\s*\{[^\}]*\}', 
    '.sk-guide-banner-badge {\n    flex-shrink: 0;\n    font-size: 11px;\n    font-weight: 700;\n    letter-spacing: 0.1em;\n    color: #fff;\n    background: linear-gradient(135deg, #3B82F6, #8B5CF6);\n    padding: 6px 16px;\n    border-radius: 20px;\n    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);\n}', css)

with open('app/starter-kit.css', 'w') as f:
    f.write(css)

print("CSS updated successfully.")
