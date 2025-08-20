# chatbot.py

# ---------------------------
# Imports
# ---------------------------
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
import os

# ---------------------------
# Set OpenAI API key
# ---------------------------
# Replace with your actual key
os.environ["OPENAI_API_KEY"] = "sk-your-real-key"

print("OpenAI Key:", os.getenv("OPENAI_API_KEY"))

# ---------------------------
# Load PDF
# ---------------------------
loader = PyPDFLoader("Computer Programming.pdf")  # Replace with your PDF name
pages = loader.load()
print(f"Loaded {len(pages)} pages.")

# ---------------------------
# Split PDF into chunks
# ---------------------------
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,     # characters per chunk
    chunk_overlap=50    # overlap for context
)
docs = text_splitter.split_documents(pages)
print(f"Created {len(docs)} text chunks.")

# ---------------------------
# Create embeddings and FAISS vector store
# ---------------------------
embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(docs, embeddings)
print("FAISS vectorstore created.")

# ---------------------------
# Setup the chatbot
# ---------------------------
llm = ChatOpenAI(temperature=0)  # GPT model
qa = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(),
    return_source_documents=True
)

# ---------------------------
# Ask questions loop
# ---------------------------
print("\n--- Chatbot is ready! Ask questions about your PDF ---")
while True:
    query = input("\nAsk a question (or type 'exit' to quit): ")
    if query.lower() == "exit":
        print("Goodbye!")
        break
    result = qa(query)
    print("\nAnswer:", result['result'])
