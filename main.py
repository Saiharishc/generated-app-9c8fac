from fastapi import FastAPI

app = FastAPI()

@app.get("/items")
def read_items():
    return {"message": "Listing items for: build me a test app"}
