import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.totemPhrase).toBe('Votre phrase totem ici');
    expect(component.editedTotemPhrase).toBe('');
    expect(component.editing).toBe(false);
    expect(component.fiatAmount).toBe(1000);
    expect(component.r4v3TokenAmount).toBe(500);
    expect(component.totalAmount).toBe(1500);
  });

  it('should start editing', () => {
    component.startEditing();
    expect(component.editedTotemPhrase).toBe(component.totemPhrase);
    expect(component.editing).toBe(true);
  });

  it('should save totem phrase', () => {
    component.startEditing();
    component.editedTotemPhrase = 'New Totem Phrase';
    component.saveTotemPhrase();
    expect(component.totemPhrase).toBe('New Totem Phrase');
    expect(component.editing).toBe(false);
  });

  it('should cancel editing', () => {
    component.startEditing();
    component.editedTotemPhrase = 'New Totem Phrase';
    component.cancelEditing();
    expect(component.editedTotemPhrase).toBe(component.totemPhrase);
    expect(component.editing).toBe(false);
  });

  it('should load card transactions', () => {
    component.loadCardTransactions();
    expect(component.cardTransactions.length).toBe(component.selectedCardTransactionCount);
  });

  it('should load crypto transactions', () => {
    component.loadCryptoTransactions();
    expect(component.cryptoTransactions.length).toBe(component.selectedCryptoTransactionCount);
  });

  it('should return correct card transactions', () => {
    const transactions = component.getCardTransactions(3);
    expect(transactions.length).toBe(3);
  });

  it('should return correct crypto transactions', () => {
    const transactions = component.getCryptoTransactions(3);
    expect(transactions.length).toBe(3);
  });
});