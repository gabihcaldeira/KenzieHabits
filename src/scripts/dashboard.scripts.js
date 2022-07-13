import Dashboard from "../models/dashboard.models.js";

// Dashboard.getAllHabits()

const teste = [
    {
        habit_id: 48,
        habit_title: "Brasil é top",
        habit_description: "zsas",
        habit_category: "Saúde",
        habit_status: false
    },
    {
        habit_id: 47,
        habit_title: "bater ponto corretamente",
        habit_description: "bater ponto todos os dias nos horários corretos",
        habit_category: "saude",
        habit_status: false
    },
    {
        habit_id: 49,
        habit_title: "bater ponto corretamente",
        habit_description: "bater ponto todos os dias nos horários corretos",
        habit_category: "saude",
        habit_status: false
    },
    {
        habit_id: 51,
        habit_title: "bater ponto corretamente",
        habit_description: "bater ponto todos os dias nos horários corretos",
        habit_category: "saude",
        habit_status: true
    }
]


Dashboard.showTableHabits(teste)