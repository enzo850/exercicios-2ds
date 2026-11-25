
const courses = [
    {
        id: 1,
        title: "Programação Web",
        category: "TECNOLOGIA",
        description: "Aprenda HTML, CSS e JavaScript do zero.",
        icon: "💻",
        duration: "12 horas",
        level: "Iniciante",
        color: "#e8e7ff"
    },
    {
        id: 2,
        title: "Design Gráfico",
        category: "CRIATIVIDADE",
        description: "Conheça os fundamentos do design e da criação visual.",
        icon: "🎨",
        duration: "8 horas",
        level: "Iniciante",
        color: "#ffe9e5"
    },
    {
        id: 3,
        title: "Matemática Básica",
        category: "EDUCAÇÃO",
        description: "Aprenda operações, cálculos e raciocínio lógico.",
        icon: "📐",
        duration: "10 horas",
        level: "Básico",
        color: "#e1f5eb"
    },
    {
        id: 4,
        title: "Informática",
        category: "TECNOLOGIA",
        description: "Aprenda sobre computadores e ferramentas digitais.",
        icon: "🖥️",
        duration: "6 horas",
        level: "Iniciante",
        color: "#fff0d9"
    },
    {
        id: 5,
        title: "Inglês Básico",
        category: "IDIOMAS",
        description: "Comece a aprender inglês com conteúdos simples.",
        icon: "🌎",
        duration: "15 horas",
        level: "Iniciante",
        color: "#e1efff"
    },
    {
        id: 6,
        title: "Empreendedorismo",
        category: "NEGÓCIOS",
        description: "Conheça os primeiros passos para criar um negócio.",
        icon: "📈",
        duration: "9 horas",
        level: "Básico",
        color: "#f8e5ff"
    }
]

let enrolledCourses = []
let currentUser = null
let authMode = "login"

const modal = document.getElementById("authModal")
const authForm = document.getElementById("authForm")
const nameGroup = document.getElementById("nameGroup")
const modalTitle = document.getElementById("modalTitle")
const modalDescription = document.getElementById("modalDescription")
const submitAuth = document.getElementById("submitAuth")
const switchText = document.getElementById("switchText")
const switchMode = document.getElementById("switchMode")
const authMessage = document.getElementById("authMessage")

const main = document.querySelector("main")
const footer = document.querySelector("footer")
const dashboard = document.getElementById("dashboard")

function openModal(mode) {
    authMode = mode
    modal.classList.add("active")
    authMessage.textContent = ""
    authForm.reset()
    updateModal()
}

function closeModal() {
    modal.classList.remove("active")
}

function updateModal() {
    if (authMode === "register") {
        modalTitle.textContent = "Criar conta"
        modalDescription.textContent = "Cadastre-se para começar a aprender."
        submitAuth.textContent = "Criar minha conta"
        nameGroup.style.display = "flex"
        switchText.textContent = "Já tem uma conta?"
        switchMode.textContent = "Entrar"
    } else {
        modalTitle.textContent = "Bem-vindo!"
        modalDescription.textContent = "Entre na sua conta para continuar."
        submitAuth.textContent = "Entrar"
        nameGroup.style.display = "none"
        switchText.textContent = "Não tem uma conta?"
        switchMode.textContent = "Cadastre-se"
    }
}

switchMode.addEventListener("click", () => {
    openModal(authMode === "login" ? "register" : "login")
})

authForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = document.getElementById("userName").value.trim()
    const email = document.getElementById("userEmail").value.trim().toLowerCase()
    const password = document.getElementById("userPassword").value

    if (password.length < 6) {
        showMessage("A senha precisa ter pelo menos 6 caracteres.", "error")
        return
    }

    let users = JSON.parse(localStorage.getItem("academyUsers")) || []

    if (authMode === "register") {
        if (name.length < 2) {
            showMessage("Digite seu nome completo.", "error")
            return
        }

        const exists = users.find(user => user.email === email)

        if (exists) {
            showMessage("Este e-mail já está cadastrado.", "error")
            return
        }

        const newUser = {
            name: name,
            email: email
        }

        users.push(newUser)

        localStorage.setItem("academyUsers", JSON.stringify(users))

        currentUser = newUser

        localStorage.setItem("academySession", JSON.stringify(newUser))

        openDashboard()

    } else {
        const user = users.find(user => user.email === email)

        if (!user) {
            showMessage("Conta não encontrada. Faça seu cadastro primeiro.", "error")
            return
        }

        currentUser = user

        localStorage.setItem("academySession", JSON.stringify(user))

        openDashboard()
    }
})

function showMessage(message, type) {
    authMessage.textContent = message
    authMessage.style.color = type === "error" ? "#e04444" : "#15945b"
}

function renderCourses() {
    const courseGrid = document.getElementById("courseGrid")

    courseGrid.innerHTML = courses.map(course => `
        <article class="course-card">
            <div class="course-cover" style="background:${course.color}">
                ${course.icon}
            </div>

            <div class="course-info">
                <span class="tag">${course.category}</span>
                <h3>${course.title}</h3>
                <p>${course.description}</p>

                <div class="course-meta">
                    <span>⏱ ${course.duration}</span>
                    <span>📚 ${course.level}</span>
                </div>

                <button class="btn-primary" onclick="enrollCourse(${course.id})">
                    Começar curso →
                </button>
            </div>
        </article>
    `).join("")
}

function enrollCourse(courseId) {
    if (!currentUser) {
        openModal("login")
        return
    }

    if (!enrolledCourses.includes(courseId)) {
        enrolledCourses.push(courseId)
        saveEnrolledCourses()
    }

    openDashboard()
}

function saveEnrolledCourses() {
    if (!currentUser) return

    localStorage.setItem(
        "academyCourses_" + currentUser.email,
        JSON.stringify(enrolledCourses)
    )
}

function loadEnrolledCourses() {
    if (!currentUser) return

    enrolledCourses = JSON.parse(
        localStorage.getItem("academyCourses_" + currentUser.email)
    ) || []
}

function openDashboard() {
    if (!currentUser) return

    closeModal()

    main.style.display = "none"
    footer.style.display = "none"
    dashboard.classList.add("active")

    document.getElementById("studentName").textContent =
        currentUser.name.split(" ")[0]

    loadEnrolledCourses()
    renderDashboard()
    window.scrollTo(0, 0)
}

function renderDashboard() {
    const dashboardCourses = document.getElementById("dashboardCourses")

    const selectedCourses = courses.filter(course =>
        enrolledCourses.includes(course.id)
    )

    document.getElementById("totalCourses").textContent = courses.length
    document.getElementById("completedCourses").textContent = "0"
    document.getElementById("studentProgress").textContent = "0%"

    if (selectedCourses.length === 0) {
        dashboardCourses.innerHTML = `
            <div class="benefit-card">
                <h3>Você ainda não está inscrito em nenhum curso.</h3>
                <p>Volte para a página inicial e escolha seu primeiro curso!</p>
            </div>
        `

        return
    }

    dashboardCourses.innerHTML = selectedCourses.map(course => `
        <article class="course-card">
            <div class="course-cover" style="background:${course.color}">
                ${course.icon}
            </div>

            <div class="course-info">
                <span class="tag">${course.category}</span>
                <h3>${course.title}</h3>
                <p>${course.description}</p>

                <div class="course-meta">
                    <span>⏱ ${course.duration}</span>
                    <span>📚 ${course.level}</span>
                </div>

                <button class="btn-primary" onclick="openLesson(${course.id})">
                    Acessar curso →
                </button>
            </div>
        </article>
    `).join("")
}

function openLesson(courseId) {
    const course = courses.find(item => item.id === courseId)

    if (!course) return

    alert(
        "Bem-vindo ao curso: " + course.title +
        "\n\nEste espaço poderá receber as aulas e atividades do curso."
    )
}

function logout() {
    currentUser = null
    enrolledCourses = []

    localStorage.removeItem("academySession")

    dashboard.classList.remove("active")
    main.style.display = "block"
    footer.style.display = "flex"

    window.scrollTo(0, 0)
}

document.getElementById("loginBtn").addEventListener("click", () => {
    openModal("login")
})

document.getElementById("registerBtn").addEventListener("click", () => {
    openModal("register")
})

document.getElementById("heroLogin").addEventListener("click", () => {
    openModal("login")
})

document.getElementById("ctaRegister").addEventListener("click", () => {
    openModal("register")
})

document.getElementById("closeModal").addEventListener("click", closeModal)

document.getElementById("logoutBtn").addEventListener("click", logout)

document.getElementById("backHome").addEventListener("click", logout)

document.getElementById("exploreBtn").addEventListener("click", () => {
    document.getElementById("cursos").scrollIntoView({
        behavior: "smooth"
    })
})

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal()
    }
})

document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("active")
})

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("active")
    })
})

function restoreSession() {
    const session = JSON.parse(localStorage.getItem("academySession"))

    if (session) {
        currentUser = session
        openDashboard()
    }
}

renderCourses()
restoreSession()
