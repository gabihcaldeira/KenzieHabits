import Dashboard from "../models/dashboard.models.js";
import DashboardActions from "../controller/dashboard.controller.js";


const allHabits = await DashboardActions.getAllHabits()
Dashboard.showTableHabits(allHabits)
DashboardActions.filterAllHabits()
DashboardActions.filterCompleteHabits()





