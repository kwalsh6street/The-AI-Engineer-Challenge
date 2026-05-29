<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  <!-- Write your answer here -->
summarization (summarizing a concept) and creativity (explaining in simple terms with an example)

**Response:**  
<!-- Add your app's response here -->
Think of a program as a little world filled with things. Object-oriented programming (OOP) is a way to build that world by modeling real “things” as objects.

- Objects: Like real objects (a phone, a dog, a car), they have:
  - Properties (data): a dog’s name, age, color.
  - Behaviors (actions): a dog can bark, eat, sleep.

- Class: A blueprint or recipe for making objects.
  - Class = Dog (says what every dog has/does)
  - Objects = Fido, Luna (actual dogs made from the blueprint)

- Methods and attributes:
  - Attributes = properties (name, age)
  - Methods = actions (bark(), eat())

The four big ideas (in plain words):
- Encapsulation: Keep related data and actions together in one box (the object), and control who can touch what inside the box.
- Abstraction: Show the outside controls, hide the messy internals. You can press “bark()” without knowing how sound is made.
- Inheritance: Make a new class from an existing one to reuse and specialize. Animal → Dog → GuideDog.
- Polymorphism: One common command, different specific behaviors. Call move() on a Bird (flies) or Fish (swims) with the same name.

Why this helps:
- Organizes code around real concepts you understand.
- Reuse: build once, extend later.
- Easier to change parts without breaking everything.

Tiny example:
- Class: Dog
  - attributes: name, age
  - methods: bark() → “Woof!”
- You create objects: Fido = Dog("Fido", 3), Luna = Dog("Luna", 5)
- You call actions: Fido.bark() → “Woof!”

How to practice (you’ve got this):
1) Pick a tiny app (to-do list, pet tracker).
2) List nouns (Task, User, Pet) → classes.
3) List verbs (addTask, complete, feed) → methods.
4) Give each class the data it owns (attributes).
5) Build one class at a time and try calling its methods.

If you tell me your preferred language (Python, JavaScript, Java, etc.), I can show a 10–15 line example to make this concrete.
---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points:
The quick brown fox jumps over the lazy dog. The dog was sleeping under the tree. The fox was hungry and wanted to eat the dog. 

**Aspect Tested:** 
Summary

**Response:**  
A hungry fox jumps over a lazy dog sleeping under a tree, intending to eat it.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  <!-- Write your answer here -->
Creativity

**Response:**  
Unit R-3 was built to scrub the storm tunnels, speaking only in diagnostics to puddles and grit. One night, a bloom of bioluminescent algae sparked in a stagnant bend, answering the robot’s status LED with a shy blue blink. R-3 paused, then pulsed back: 1-0-1-hello.

The tunnel learned their language of light. Between rains they traded flickers—stories of rivers, rumors of rooftops.

When the deluge roared, R-3 anchored itself over the bloom, catching branches and bottles with its own frame. In the quiet afterward, the algae had spread across R-3’s joints, making constellations along steel.

Up above, workers peered into a manhole and saw a small galaxy rolling by. R-3 raised an elbow, glowing. In the darkest place it had found a friend, and a way to be seen.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  <!-- Write your answer here -->
Reasoning

**Response:**  
<!-- Add your app's response here -->
- Apples: 12 apples ÷ 4 per pack = 3 packs
- Oranges: 9 oranges ÷ 3 per pack = 3 packs

So, you need 3 packs of apples and 3 packs of oranges. Nice and tidy!
---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone:
Dear Team,

Here is in update on the timeline for the project. We’ve made some progress, but we need to fix some weird bugs befor efinalizing.

**Aspect Tested:**  
Creativity

**Response:**  
Dear Team,

Please find an update on the project timeline. We have made progress; however, we must resolve several outstanding defects before finalizing the deliverables.>

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
<!-- Write your answer here -->
Yes

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
How do I read a csv in pandas?

**Result:**  
Great question—you’ve got this. Here’s the fastest way and a few handy options.

Quick start
- import pandas as pd
- df = pd.read_csv("path/to/file.csv")
- df.head()

Useful options (most common)
- sep=","            # delimiter (e.g., "\t" for TSV)
- header=0           # row with column names; use None if there’s no header
- names=[...]        # supply your own column names if no header
- index_col="id"     # set an index column
- usecols=["a","b"]  # read only certain columns
- dtype={"col": "int64"}   # control types to save memory/avoid inference issues
- parse_dates=["date"]     # parse date columns
- na_values=["NA","?"]     # custom missing values
- encoding="utf-8"   # or "latin1", "utf-8-sig" if you hit decode errors
- nrows=1000         # read a sample
- skiprows=1         # skip lines at the top

Example with several options
import pandas as pd
df = pd.read_csv(
    "data/sales.csv",
    sep=",",
    header=0,
    usecols=["order_id","date","amount"],
    parse_dates=["date"],
    dtype={"order_id": "string", "amount": "float64"},
    encoding="utf-8"
)

Read from a URL or compressed file
df = pd.read_csv("https://example.com/data.csv")
df = pd.read_csv("data/logs.csv.gz", compression="gzip")

Large files (stream in chunks)
chunks = pd.read_csv("big.csv", chunksize=100_000, low_memory=False)
total = 0.0
for chunk in chunks:
    total += chunk["amount"].sum()

Common hiccups and quick fixes
- UnicodeDecodeError: try encoding="latin1" or "utf-8-sig"
- ParserError (weird delimiters): try sep=";" or engine="python"
- Mixed types warning: set dtype explicitly or use low_memory=False
- Windows paths: use r"C:\path\to\file.csv" or forward slashes "C:/path/to/file.csv"

Sanity checks after loading
print(df.head())
print(df.info())
print(df.sample(5))

If you share a snippet of your CSV (column names, a few rows) or the error you’re hitting, I can tailor the exact read_csv call for you.

---

**Prompt:**  
Why should I use python over javascript for data science?

**Result:**  
Great question. The “best” choice depends on your goals and constraints. Here’s why most data scientists pick Python over JavaScript, plus when JavaScript actually shines.

Why Python often wins for data science
- Deep, mature ecosystem: NumPy, pandas, SciPy, scikit-learn, PyTorch, TensorFlow, XGBoost, LightGBM, statsmodels, networkx, spaCy, transformers, Prophet—battle-tested and extensive.
- Performance via native code: Python is a glue layer over fast C/CUDA/Fortran kernels (BLAS, cuDNN). You get vectorized operations, GPU acceleration, and distributed options (Dask, Ray, Spark) without writing low-level code.
- First-class experimentation tools: Jupyter/IPython, notebooks, rich plotting (matplotlib, seaborn, plotly, bokeh), and robust experiment tracking (MLflow, Weights & Biases).
- Data engineering and ML Ops: Smooth paths for pipelines and serving (Airflow, Prefect, dbt via adapters, FastAPI, BentoML, Triton, TorchServe), plus model packaging/export (ONNX, TorchScript).
- Community and learning curve: Huge community, abundant tutorials, Stack Overflow answers, and hiring pool—makes unblocking and collaboration faster.
- DataFrame-native workflow: pandas/Polars are mature and ergonomic for wrangling, time series, joins, and group operations; JS alternatives (e.g., Danfo.js) are improving but not as full-featured yet.

Common concerns about Python (and context)
- Speed: Pure Python loops are slow, but idiomatic data science relies on vectorized ops in fast native libs. For tight loops, Numba/Cython or moving logic into NumPy/PyTorch usually solves it.
- Environments: Packaging can be fiddly, but tools like conda/mamba/uv/poetry and Docker help keep things clean.

When JavaScript might be the better choice
- In-browser ML or privacy-by-default inference: TensorFlow.js, ONNX Runtime Web, and WebGPU/WebGL let you run models client-side with zero backend latency and keep data on device.
- Highly interactive web visuals: D3.js, Vega/Vega-Lite, Three.js give fine-grained, performant, custom visualizations. (Python has Plotly/Dash/Streamlit, but JS gives deeper control in the browser.)
- Single-language stack: Small teams or rapid prototypes benefit from one language across front end, backend (Node), and light ML inference.
- Edge/serverless delivery: JavaScript/TypeScript on Cloudflare Workers, Vercel, or Netlify can be very simple to deploy for lightweight data apps.

A practical middle path
- Train in Python, deploy UI in JavaScript:
  - Train and evaluate with Python’s ecosystem.
  - Export models to ONNX or a REST/gRPC service.
  - Consume from a JS front end, or run ONNX Runtime Web in-browser for some models.
- This gives you Python’s modeling power plus JS’s distribution and interactivity.

Quick decision check
- Want the richest ML/stats libraries, faster iteration on modeling, and standard workflows? Choose Python.
- Need models or analytics to run directly in the browser with slick, custom interactivity and minimal backend? Choose JavaScript.
- Mixed needs or a team split between data and product? Do Python for training + JS for the app.

If you share your primary goal (exploration, heavy ML, browser-first app, team skillset), I can help you map a concrete stack and first steps.

---

**Prompt:**  
Explain Moby Dick in under 200 words.

**Result:**  
Here’s a quick take on Moby-Dick:

Ishmael, a restless sailor, signs onto the whaling ship Pequod and befriends Queequeg. Their captain, Ahab, is consumed by a monomaniacal quest to kill Moby Dick, the white whale that maimed him. As the ship roams the globe, the diverse crew encounters other vessels and omens while Ahab’s obsession tightens like a noose.

The novel blends adventure with essays on whales, whaling, and philosophy. Ishmael’s voice shifts from report to meditation, asking what can be known and what must be faced without certainty. The whale becomes a vast symbol—nature’s power, the terror and allure of the unknown, even the blankness onto which humans project meaning.

Starbuck, the first mate, stands for prudence and conscience but cannot restrain Ahab. In a final three-day chase, Moby Dick destroys the Pequod; only Ishmael survives, clinging to Queequeg’s coffin, to tell the tale. It’s a tragedy about obsession, knowledge, and fate.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
Overall yes, the summarization and straightforward asks work well. The coding specific ones could be improved if given more context on the targeted audience.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
What is Apple's stock price?

**Result:**  
I don’t have live market data access, so I can’t give the current price. You can quickly check Apple’s stock (ticker: AAPL) here:
- Google search: “AAPL” (shows a live quote)
- iPhone/Mac Stocks app: add AAPL
- Yahoo Finance or your brokerage app
Note: many free quotes are delayed up to 15 minutes, and prices can differ in premarket/after-hours.

If you’d like, I can help you set up price alerts or a simple check-in routine so you’re not stuck refreshing quotes. What’s your goal with checking the price today?

---

**Prompt:**  
What is my zipcode?

**Result:**  
I don’t have access to your location, so I can’t see your ZIP code. No worries—happens to all of us. Here are quick ways to find it:

- Maps on your phone: Open Google Maps or Apple Maps, tap the blue dot (your location) or drop a pin—your address line usually shows the ZIP.
- USPS ZIP Code Lookup: Search “USPS ZIP Code Lookup” and enter your street address and city/state.
- Search engine: Type your full address into Google/Bing; the ZIP will appear.
- Check anything mailed to you: A recent letter, package label, utility bill, bank statement, or your lease.
- Delivery/shopping apps: Your saved address in Amazon, Uber Eats, DoorDash, etc., shows the ZIP.
- Ask a building manager/neighbor if you’re new to the area.

If you’re comfortable, share your city and state (no need for your full address), and I can help look it up. If you’re outside the U.S., tell me your country and we’ll find the correct postal code format.

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
The app currently does not have access to the internet or any directed data sources. The app also does not have any memory of past messages, let alone past conversations.

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
I added per-session message memory that is fully handled by the frontend.

**Results:**  
The app now maintains conversation history across multiple messages, allowing for more natural and context-aware interactions.

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
