import { TestBed, inject } from "@angular/core/testing";
import { PlantService } from "./plant.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "../../environments/environment.development";
import { Plant } from "./plant";

describe("Service: Plant", () => {
  let service: PlantService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantService],
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(PlantService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should fetch plants from the API", () => {
    const mockPlants: Plant[] = [
      {
        id: "1",
        nombre_comun: "Planta 1",
        tipo: "Interior",
        clima: "Tropical",
      },
      {
        id: "2",
        nombre_comun: "Planta 2",
        tipo: "Exterior",
        clima: "Templado",
      },
      {
        id: "3",
        nombre_comun: "Planta 3",
        tipo: "Interior",
        clima: "Templado, cálido",
      },
    ];

    service.getPlants().subscribe((plants) => {
      expect(plants.length).toBe(3);
      expect(plants).toEqual(mockPlants);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}`);
    expect(req.request.method).toBe("GET");
    req.flush(mockPlants);
  });
});
