import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PlantListComponent } from "./plant-list.component";
import { PlantService } from "../plant.service";
import { Observable, of } from "rxjs";
import { Plant } from "../plant";

describe("PlantListComponent", () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let mockPlantService: {
    getPlants: { and: { returnValue: (arg0: Observable<Plant[]>) => void } };
  };

  beforeEach(waitForAsync(() => {
    mockPlantService = jasmine.createSpyObj(["getPlants"]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PlantListComponent],
      providers: [{ provide: PlantService, useValue: mockPlantService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

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

    mockPlantService.getPlants.and.returnValue(of(mockPlants));

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create a table with three rows plus the header", () => {
    component.ngOnInit();

    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css("tr"));
    expect(rows.length).toBe(4);
  });
});
