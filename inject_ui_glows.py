import re

# 1. Inject glows into GuidedChatUI.tsx
with open('components/GuidedChatUI.tsx', 'r') as f:
    chat_ui = f.read()

chat_glows = """        <div className="sk-chat-container">
            <div className="sk-bg-glow sk-bg-glow-1" />
            <div className="sk-bg-glow sk-bg-glow-2" />
            <div className="sk-bg-glow sk-bg-glow-3" />"""
chat_ui = chat_ui.replace('        <div className="sk-chat-container">', chat_glows)

with open('components/GuidedChatUI.tsx', 'w') as f:
    f.write(chat_ui)

# 2. Inject glows into GuidedWorkUI.tsx (2 places)
with open('components/GuidedWorkUI.tsx', 'r') as f:
    work_ui = f.read()

work_glows_1 = """            <div className="gw-container">
                <div className="sk-bg-glow sk-bg-glow-1" />
                <div className="sk-bg-glow sk-bg-glow-2" />
                <div className="sk-bg-glow sk-bg-glow-3" />"""
work_ui = work_ui.replace('            <div className="gw-container">', work_glows_1)

work_glows_2 = """        <div
            className="gw-container"
            onClick={() => {
                if (step.inputType === "tap") goNext();
            }}
        >
            <div className="sk-bg-glow sk-bg-glow-1" />
            <div className="sk-bg-glow sk-bg-glow-2" />
            <div className="sk-bg-glow sk-bg-glow-3" />"""
            
work_ui = re.sub(r'        <div\s+className="gw-container"[^>]+>', work_glows_2, work_ui)

with open('components/GuidedWorkUI.tsx', 'w') as f:
    f.write(work_ui)

print("Injected glows into GuidedChatUI and GuidedWorkUI")
