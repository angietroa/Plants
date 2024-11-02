import { Component, OnInit } from "@angular/core";
import { Plant } from "../plant";
import { PlantService } from "../plant.service";

@Component({
  selector: "app-plant-list",
  templateUrl: "./plant-list.component.html",
  styleUrls: ["./plant-list.component.css"],
})
export class PlantListComponent implements OnInit {
  plants: Array<Plant> = [];
  tableHeader: string[] = ["#", "Nombre común", "Tipo", "Clima"];
  plantTotals = [
    {
      icon: "../../../assets/inside.svg",
      label: "Total de plantas de interior",
      total: 0,
    },
    {
      icon: "../../../assets/outside.svg",
      label: "Total de plantas de exterior",
      total: 0,
    },
  ];
  totalPlantsIndoor: number = 0;
  totalPlantsOutdoor: number = 0;

  constructor(private plantService: PlantService) {}

  getPlants(): void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.calculateTotals();
    });
  }

  calculateTotals(): void {
    this.plantTotals[0].total = this.plants.filter(
      (plant) => plant.tipo === "Interior"
    ).length;
    this.plantTotals[1].total = this.plants.filter(
      (plant) => plant.tipo === "Exterior"
    ).length;
  }

  ngOnInit() {
    this.getPlants();
  }
}
