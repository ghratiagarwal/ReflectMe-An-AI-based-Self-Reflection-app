# ReflectMe - An AI Based Self Reflection App

ReflectMe is a full-stack, secure web application designed to bridge the gap between structured emotional tracking and mindful self-care. By leveraging a stateful relational database model alongside the advanced contextual power of the Google Gemini LLM API, the application creates a continuous feedback loop. Users can securely authenticate, map their current emotional baselines, maintain multimedia journal entries, extract context-aware insights, and interact with an integrated conversational AI chatbot.

---

## 💻 Core Technical Stack

*   **Backend Engineering:** Core PHP (Native, Session-State Management)
*   **Database Management System:** MySQL (Relational Schema Design)
*   **Frontend Interfaces:** HTML5, CSS3 (Custom Responsive Layouts), JavaScript / Asynchronous AJAX
*   **AI Engine Integration:** Google Gemini LLM API (Via cURL / HTTP REST Endpoints)

---

## 🚀 Key Modules & Application Flow

1.  **Authentication Engine (`registration.php` / `login.php`)**
    *   Secure user onboarding and verification workflows. Employs cryptographically secure password hashing techniques alongside strict PHP session lifecycle state validation.
2.  **The Landing Dashboard (`index.php`)**
    *   The central portal routing the authenticated user to different specialized mental health assessment modules.
3.  **Emotion Analyser**
    *   Captures emotional baselines, primary triggers, underlying causes, and categorical mood choices, transforming qualitative emotional expressions into queryable database states.
4.  **Journal & Reflection Modules**
    *   Accepts raw long-form textual reflections as well as multimedia assets (images and microphone voice recordings). 
    *   **Self-Mirroring Reframe:** Captures exact user content within the data layer to reflect user-centric focus items.
    *   **Mood-Adaptive Support Matrix:** Translates individual mood states across 12 distinct archetypes directly into specialized psychological coping exercises (e.g., 4-7-8 deep breathing patterns or 5-4-3-2-1 situational grounding mechanisms).
5.  **Insights & Journey Modules**
    *   Aggregates historic mood logs and entries over clear developmental timelines, displaying contextual data points without needing bloated third-party charting libraries.
6.  **Context-Aware AI Chat Engine**
    *   A continuous chat workspace leveraging integrated conversational messages linked directly to a centralized core journal entity index.

---

## 🗃️ Database Architecture (MySQL)

As illustrated in the data structural schema figures from `image_8d2a78.png` and `image_8d2a98.png`, the backend utilizes a relational database titled `reflectme` divided structurally across four highly normalized tables:

### 1. `users`
Tracks unique platform credentials and operational accounts.
*   `id` : `int(11)` | **PRIMARY KEY** | `auto_increment`
*   `name` : `varchar(50)`
*   `email` : `varchar(100)` | **UNIQUE KEY**
*   `password` : `varchar(100)`
*   `created_at` : `timestamp` | `DEFAULT: current_timestamp()`

### 2. `mood_logs`
Logs precise emotional states mapped to individual user sessions.
*   `id` : `int(11)` | **PRIMARY KEY** | `auto_increment`
*   `user_id` : `int(11)` | **FOREIGN KEY** (`MUL`)
*   `emotion` : `varchar(50)`
*   `mood_words` : `text`
*   `intensity` : `int(11)`
*   `causes` : `text`
*   `created_at` : `timestamp` | `DEFAULT: current_timestamp()`

### 3. `journal_entries`
The application's core logic table. It aggregates user text, file upload destination links, and systemic AI engine breakdowns.
*   `id` : `int(11)` | **PRIMARY KEY** | `auto_increment`
*   `user_id` : `int(11)`
*   `mood_log_id` : `int(11)` | **FOREIGN KEY** (`MUL`)
*   `prompt_question` : `varchar(255)`
*   `content` : `text`
*   `image_path` : `varchar(255)`
*   `voice_path` : `varchar(255)`
*   `buddy_summary` : `text`
*   `themes` : `longtext`
*   `ai_intensity` : `int(11)`
*   `user_valence` : `decimal(3,2)` | `DEFAULT: 0.00`
*   `created_at` : `timestamp`
*   `reframe` : `text` *(Stores exact user input mapping for focused self-reflection)*
*   `ai_emotions_json` : `text`
*   `intensity_reason` : `text`
*   `coping_strategies` : `text` *(Dynamic textual response mapped via 12 core emotions)*
*   `alignment_text` : `text`

### 4. `chat_messages`
Maintains records of individual dialogue iterations within the AI chatbot space.
*   `id` : `int(11)` | **PRIMARY KEY** | `auto_increment`
*   `entry_id` : `int(11)` | **FOREIGN KEY** (`MUL`)
*   `sender` : `enum('user','ai')`
*   `message` : `text`
*   `created_at` : `timestamp` | `DEFAULT: current_timestamp()`

---

## 🔧 Installation & Environmental Setup

To deploy this environment locally using a standard local development suite like XAMPP or WAMP, follow these configuration instructions:

### Step 1: Environment Provisioning
1. Download and open your **XAMPP Control Panel**.
2. Start the **Apache HTTP Server** module and the **MySQL Database** module.

### Step 2: Source Code Initialization
1. Clone or copy your complete project codebase directory directly into your system's target server deployment directory (e.g., `C:\xampp\htdocs\ReflectMe\`).

### Step 3: Relational Database Initialization
1. Launch your web browser and navigate to the database management interface: `http://localhost/phpmyadmin/`.
2. Click on the **New** option in the sidebar menu and generate a target database named exactly `reflectme`.
3. Select your newly declared database, navigate into the **SQL** query execution tab, execute your structural `.sql` export payload script, or cross-verify table fields directly utilizing the structures illustrated in `image_8d2a78.png` and `image_8d2a98.png`.

### Step 4: LLM Service Connection Hook
1. Obtain an authorized connection key using the formal developer management platform workspace: Google AI Studio.
2. Open your internal global application configuration or target handler files where required and locate the API connection variables.
3. Replace the placeholder authorization credentials with your active key token:
```php
   $api_key = "YOUR_GEMINI_API_KEY_HERE";
