import { TestBed, inject } from "@angular/core/testing";
import { PlantService } from "./plant.service";

describe("Service: Plant", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantService],
    });
  });

  it("should ...", inject([PlantService], (service: PlantService) => {
    expect(service).toBeTruthy();
  }));
});