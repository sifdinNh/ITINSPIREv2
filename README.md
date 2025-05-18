# 🛒 E-Commerce Website

A full-featured e-commerce web application built with **Django REST Framework** on the backend and **React** on the frontend. This application includes user authentication, product listings, shopping cart functionality, and order processing.

## 🔧 Tech Stack

### Backend
- **Python**
- **Django**
- **Django REST Framework**

### Frontend
- **React**
- **Axios**
- **Bootstrap**

---

## ⚙️ Installation

### Backend (Django)

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/backend

python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

pip install -r requirements.txt

python manage.py migrate
python manage.py createsuperuser  # Follow prompts
python manage.py runserver
