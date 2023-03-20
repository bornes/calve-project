import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveToDoComponent } from './archive-to-do.component';

describe('ArchiveToDoComponent', () => {
  let component: ArchiveToDoComponent;
  let fixture: ComponentFixture<ArchiveToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ArchiveToDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
