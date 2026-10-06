from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title = "Customer Support Analytics API", version = "0.1.0")


# Allow the React dev server (http://localhost:5173) to call this API from a browser.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/health")
def health():
    return{"status": "ok", "service": "customer-support-analytics-api"}