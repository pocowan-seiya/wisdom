import re

with open('app/starter-kit.css', 'r') as f:
    css = f.read()

# 1. Rename .sk-hero-glow to .sk-bg-glow for global use
css = css.replace('.sk-hero-glow ', '.sk-bg-glow ')
css = css.replace('.sk-hero-glow-', '.sk-bg-glow-')
css = css.replace('.sk-hero-glow\n', '.sk-bg-glow\n')
css = css.replace('.sk-hero-glow {', '.sk-bg-glow {')

# 2. Increase opacities for better visibility
css = re.sub(r'(\.sk-bg-glow-1\s*\{[^}]*opacity:\s*)0\.08', r'\g<1>0.25', css) # Cyan glow
css = re.sub(r'(\.sk-bg-glow-2\s*\{[^}]*opacity:\s*)0\.06', r'\g<1>0.20', css) # Purple glow
css = re.sub(r'(\.sk-bg-glow-3\s*\{[^}]*opacity:\s*)0\.05', r'\g<1>0.15', css) # Gold glow

# 3. Add global positioning context to UI containers so glows are relative
# Let's make sure .sk-landing, .sk-chat-container, .gw-container have position: relative and overflow: hidden
css = re.sub(r'\.sk-chat-container\s*\{', '.sk-chat-container {\n    position: relative;\n    overflow: hidden;', css)
css = re.sub(r'\.gw-container\s*\{', '.gw-container {\n    position: fixed;\n    overflow: hidden;\n    z-index: 100;', css)

with open('app/starter-kit.css', 'w') as f:
    f.write(css)

# Update page.tsx to use new class names
with open('app/page.tsx', 'r') as f:
    page = f.read()
page = page.replace('sk-hero-glow', 'sk-bg-glow')
with open('app/page.tsx', 'w') as f:
    f.write(page)

# Update guide page to use glows and new class names if needed
with open('app/guide/page.tsx', 'r') as f:
    guide = f.read()
if '<div className="sk-bg-glow' not in guide:
    guide = guide.replace('<main className="guide-page">', '<main className="guide-page" style={{ position: "relative", overflow: "hidden" }}>\n            <div className="sk-bg-glow sk-bg-glow-1" />\n            <div className="sk-bg-glow sk-bg-glow-2" />\n            <div className="sk-bg-glow sk-bg-glow-3" />')
with open('app/guide/page.tsx', 'w') as f:
    f.write(guide)

print("Glows fixed")
