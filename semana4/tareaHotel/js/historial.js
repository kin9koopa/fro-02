class Historial {
    constructor(nombre, apellido, noches, precioHabitacion, descuentoNormal, tipoCliente, total) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.noches = noches;
        this.precioHabitacion = precioHabitacion;
        this.descuentoNormal = descuentoNormal;
        this.tipoCliente = tipoCliente;
        this.total = total;
    }

    generarReporte() {
        var datos = `<div class="cliente">Tipo de cliente: ${this.tipoCliente.toUpperCase()}</div>
                    <div class="fullNombre">Nombre: ${this.nombre} ${this.apellido} </div>
                    <div class="precio">Precido de Habitacion: $${this.precioHabitacion}</div> 
                    <div class="descuento">Descuento: ${this.descuentoNormal}% Noches: ${this.noches} </div>
                    <div class="pagoTotal">Total: $${this.total}</div> <hr>`;
        return datos;
    }
}