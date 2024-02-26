
import  {crearCartaHtml, pedirCarta,valorCarta} from './'







/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos mínimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML HTML para mostrar puntos 
 * @param {HTMLElement} divCartasComputadora HTML para mostrar puntos 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck = [] ) => {  //deck = [] significa que es un parámetro por defecto

    if ( !puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if ( !puntosHTML) throw new Error('Argumento puntosHTML es necesario');
    

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}