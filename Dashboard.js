import { supabase } from './Conexion_DB.js'

async function cargarDashboard(){

    const { data: ventas } =
    await supabase
    .from('ventas')
    .select('*')

    let total = 0
    let cantidad = 0

    ventas.forEach(v=>{
        total += v.total
        cantidad += v.cantidad
    })

    document
    .getElementById('ventasHoy')
    .textContent =
    '$' + total.toLocaleString()

    document
    .getElementById('cantidadVendida')
    .textContent =
    cantidad

    const { data: stock } =
    await supabase
    .from('stock_actual')
    .select('*')

    const bajos =
    stock.filter(
        p => p.stock_final <= 5
    )

    document
    .getElementById('stockBajo')
    .textContent =
    bajos.length
}

cargarDashboard()