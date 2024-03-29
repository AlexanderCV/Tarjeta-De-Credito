import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listTajertas: any[] = [
    {titular: "Juan Perez", numeroTarjeta:"253631434",fechaExpiracion:"11/23",cvv:"123"},
    {titular: "Miguel Gonzalez", numeroTarjeta:"25341434",fechaExpiracion:"11/24",cvv:"321"}
  ]; 

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      titular: ['',Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16),Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5),Validators.minLength(5)]],
      cvv: ['',[Validators.required, Validators.maxLength(3),Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
  }

  agregarTarjeta(){
    
    console.log(this.form);
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    this.listTajertas.push(tarjeta);
    this.form.reset();
  }
  eliminarTarjeta(index:number){
    this.listTajertas.splice(index,1);
  }
}
