const projects = [
    {
        title: "Responsible Security Assessments",
        description: "Structured review of systems with an emphasis on practical defense, clear reporting, and ethical handling of findings."
    },
    {
        title: "Secure Environment Hardening",
        description: "Guidance for strengthening configurations, reducing attack surface, and improving resilience against common threats."
    },
    {
        title: "Defensive Automation & Research",
        description: "Focus on efficient monitoring, repeatable workflows, and research-driven improvement for modern security operations."
    }
];

const projectsGrid = document.getElementById("projects-grid");

if (projectsGrid) {
    projects.forEach(project => {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        card.appendChild(title);
        card.appendChild(description);
        projectsGrid.appendChild(card);
    });
}