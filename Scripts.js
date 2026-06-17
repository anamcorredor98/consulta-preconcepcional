// NAVEGACIÓN ENTRE SECCIONES
function showSection(sectionId, scrollToTop = true) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const nuevaSeccion = document.getElementById(sectionId);
    if (nuevaSeccion) {
        nuevaSeccion.classList.add('active');
        
        // Solo hacer scroll al inicio si scrollToTop es true
        if (scrollToTop) {
            setTimeout(() => {
                window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth' 
                });
            }, 100);
        }
    }

    // Actualizar botones de navegación si existen
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove('active');
    });
}

// ACORDEÓN
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');

    // Cerrar todos los acordeones
    const allHeaders = document.querySelectorAll('.accordion-header');
    const allContents = document.querySelectorAll('.accordion-content');
    
    allHeaders.forEach(h => h.classList.remove('active'));
    allContents.forEach(c => c.classList.remove('active'));

    // Si no estaba activo, abrirlo
    if (!isActive) {
        header.classList.add('active');
        content.classList.add('active');
    }
}

// MOSTRAR/OCULTAR SECCIÓN DE ANTICONCEPTIVOS
function showAnticonceptivosSection() {
    document.getElementById('anticonceptivos-section').style.display = 'block';
    document.getElementById('anticonceptivos-section').scrollIntoView({ behavior: 'smooth' });
}

function hideAnticonceptivosSection() {
    document.getElementById('anticonceptivos-section').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// } FILTRO DE MÉTODOS ANTICONCEPTIVOS
function filterMethods(type, event) {
    const cards = document.querySelectorAll('.method-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Actualizar botones activos
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Filtrar tarjetas
    cards.forEach(card => {
        if (type === 'todos') {
            card.classList.remove('hidden');
        } else {
            const cardTypes = card.getAttribute('data-type').split(' ');
            if (cardTypes.includes(type)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

// COPIAR FORMATO DE HC
function copyFormatoHC() {
    const formato = document.getElementById('formato-hc');
    const text = formato.innerText;

    // Copiar al portapapeles
    navigator.clipboard.writeText(text).then(() => {
        alert('✓ Formato copiado al portapapeles. Ahora puedes pegarlo en tu sistema de historia clínica.');
    }).catch(err => {
        console.error('Error al copiar:', err);
        alert('No se pudo copiar automáticamente. Por favor, selecciona el texto manualmente y cópialo con Ctrl+C.');
    });
}

// MENÚ HAMBURGUESA
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    const btn = document.querySelector('.hamburger-btn');
    
    menu.classList.toggle('active');
    btn.classList.toggle('active');
}

function closeMenu() {
    const menu = document.getElementById('dropdownMenu');
    const btn = document.querySelector('.hamburger-btn');
    
    menu.classList.remove('active');
    btn.classList.remove('active');
}

function scrollToSection(sectionId) {
    // Esperar a que la sección esté visible y el DOM se haya actualizado
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Calcular la posición considerando el header fijo
            const headerHeight = document.querySelector('header').offsetHeight;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
            
            // Scroll suave a la posición exacta
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }, 600); // Aumentar el delay para evitar conflicto con el scroll de showSection
}

function switchToProfesionales() {
    showSection('profesionales');
}

// Cerrar menú al hacer click fuera
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.hamburger-menu');
    if (menu) {
        const isClickInside = menu.contains(event.target);
        
        if (!isClickInside) {
            closeMenu();
        }
    }
});

// FUNCIÓN PARA EXPANDIR/COLAPSAR SUBSECCIONES DEL MENÚ
function toggleMenuSection(element) {
    const menuSection = element.closest('.menu-section');
    const icon = element.querySelector('.toggle-icon');
    
    // Toggle la clase active en la sección
    menuSection.classList.toggle('active');
    
    // Cambiar el ícono
    if (menuSection.classList.contains('active')) {
        icon.textContent = '▲';
    } else {
        icon.textContent = '▼';
    }
}

// ==========================================
// BÚSQUEDA CON NAVEGACIÓN
// ==========================================

let resultadosBusqueda = [];
let indiceActual = 0;
let buscando = false;

function buscarEnPagina() {
    // Evitar búsquedas duplicadas
    if (buscando) {
        console.log('Ya hay una búsqueda en progreso, ignorando...');
        return;
    }
    
    buscando = true;
    
    const input = document.getElementById('searchInput');
    const filtro = input.value.trim();
    
    // Limpiar búsqueda anterior
    limpiarBusqueda();
    resultadosBusqueda = [];
    indiceActual = 0;
    
    if (filtro.length === 0) {
        buscando = false;
        return;
    }
    
    const container = document.querySelector('.container');
    if (!container) {
        buscando = false;
        return;
    }
    
    // LIMPIEZA AGRESIVA: eliminar TODOS los <mark> antes de buscar
    const todasLasMarcas = container.querySelectorAll('mark');
    todasLasMarcas.forEach(m => {
        const texto = document.createTextNode(m.textContent);
        if (m.parentNode) {
            m.parentNode.replaceChild(texto, m);
        }
    });
    container.normalize();
    
    console.log('Búsqueda iniciada para:', filtro);
    
    const regex = new RegExp(filtro, 'gi');
    
    const walker = document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                const parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_REJECT;
                
                const tagName = parent.tagName.toLowerCase();
                
                // Rechazar nodos dentro de script, style, o mark
                if (tagName === 'script' || tagName === 'style' || tagName === 'mark') {
                    return NodeFilter.FILTER_REJECT;
                }
                
                // Rechazar si cualquier ancestro es un mark
                if (parent.closest('mark')) {
                    return NodeFilter.FILTER_REJECT;
                }
                
                // Solo aceptar si contiene el texto buscado
                if (regex.test(node.textContent)) {
                    return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_REJECT;
            }
        }
    );
    
    const nodosAReemplazar = [];
    let nodo;
    
    while (nodo = walker.nextNode()) {
        nodosAReemplazar.push(nodo);
    }
    
    console.log(`Nodos a marcar: ${nodosAReemplazar.length}`);
    
    nodosAReemplazar.forEach(nodoTexto => {
        const texto = nodoTexto.textContent;
        const parent = nodoTexto.parentNode;
        
        if (!parent) return;
        
        const fragmento = document.createDocumentFragment();
        let ultimaPosicion = 0;
        let match;
        
        const regexLocal = new RegExp(filtro, 'gi');
        
        while ((match = regexLocal.exec(texto)) !== null) {
            if (match.index > ultimaPosicion) {
                fragmento.appendChild(
                    document.createTextNode(texto.substring(ultimaPosicion, match.index))
                );
            }
            
            const mark = document.createElement('mark');
            mark.className = 'resaltado-busqueda';
            mark.textContent = match[0];
            fragmento.appendChild(mark);
            
            ultimaPosicion = match.index + match[0].length;
        }
        
        if (ultimaPosicion < texto.length) {
            fragmento.appendChild(
                document.createTextNode(texto.substring(ultimaPosicion))
            );
        }
        
        parent.replaceChild(fragmento, nodoTexto);
    });
    
    setTimeout(() => {
        const marcas = container.querySelectorAll('mark.resaltado-busqueda');
        
        console.log(`Marcas encontradas en el DOM: ${marcas.length}`);
        
        // PRIMERO: Abrir TODOS los acordeones que contengan resultados
        marcas.forEach(marca => {
            const acordeon = marca.closest('.accordion-item');
            if (acordeon) {
                const header = acordeon.querySelector('.accordion-header');
                const content = acordeon.querySelector('.accordion-content');
                
                if (header && content) {
                    content.classList.add('active');
                    header.classList.add('active');
                    const icon = header.querySelector('.accordion-icon');
                    if (icon) {
                        icon.textContent = '▲';
                    }
                }
            }
        });
        
        // SEGUNDO: Guardar referencias
        marcas.forEach((marca, index) => {
            const acordeon = marca.closest('.accordion-item');
            const seccion = marca.closest('.section');
            const parentTag = marca.parentElement ? marca.parentElement.tagName : 'none';
            
            console.log(`Resultado ${index + 1}: "${marca.textContent}" en <${parentTag}>, sección: ${seccion ? seccion.id : 'home'}`);
            
            resultadosBusqueda.push({
                elemento: marca,
                seccion: seccion ? seccion.id : 'home',
                acordeon: acordeon
            });
        });
        
        console.log(`Total resultados guardados: ${resultadosBusqueda.length}`);
        
        if (resultadosBusqueda.length > 0) {
            mostrarResultados(resultadosBusqueda.length);
            irAResultado(0);
        } else {
            mostrarResultados(0);
        }
        
        buscando = false;
    }, 150);
}

function irAResultado(indice) {
    if (resultadosBusqueda.length === 0) {
        console.log('No hay resultados');
        return;
    }
    
    if (indice < 0 || indice >= resultadosBusqueda.length) {
        console.log('Índice fuera de rango:', indice);
        return;
    }
    
    if (indiceActual >= 0 && indiceActual < resultadosBusqueda.length) {
        const anterior = resultadosBusqueda[indiceActual];
        if (anterior && anterior.elemento) {
            anterior.elemento.classList.remove('resultado-actual');
        }
    }
    
    indiceActual = indice;
    const resultado = resultadosBusqueda[indiceActual];
    
    console.log('Navegando a resultado', indiceActual + 1, 'de', resultadosBusqueda.length);
    
    if (!resultado.elemento || !document.body.contains(resultado.elemento)) {
        console.error('El elemento ya no existe en el DOM');
        return;
    }
    
    // Verificar si necesitamos cambiar de sección
    const seccionActual = document.querySelector('.section.active');
    const necesitaCambiarSeccion = seccionActual && seccionActual.id !== resultado.seccion;
    
    if (resultado.seccion && necesitaCambiarSeccion) {
        console.log(`Cambiando de sección ${seccionActual.id} → ${resultado.seccion}`);
        showSection(resultado.seccion);
    }
    
    // Abrir acordeón si está dentro de uno
    if (resultado.acordeon) {
        const header = resultado.acordeon.querySelector('.accordion-header');
        const content = resultado.acordeon.querySelector('.accordion-content');
        
        if (header && content) {
            content.classList.add('active');
            header.classList.add('active');
            const icon = header.querySelector('.accordion-icon');
            if (icon) {
                icon.textContent = '▲';
            }
        }
    }
    
    // Resaltar resultado actual
    resultado.elemento.classList.add('resultado-actual');
    
    // Hacer scroll - dar más tiempo si cambió de sección
    const tiempoEspera = necesitaCambiarSeccion ? 600 : 200;
    
    setTimeout(() => {
        try {
            resultado.elemento.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center',
                inline: 'nearest'
            });
            
            console.log(`Scroll a resultado en sección: ${resultado.seccion}`);
        } catch(e) {
            console.error('Error en scrollIntoView:', e);
        }
    }, tiempoEspera);
    
    actualizarContador();
}

function siguienteResultado() {
    if (resultadosBusqueda.length === 0) return;
    const nuevoIndice = (indiceActual + 1) % resultadosBusqueda.length;
    irAResultado(nuevoIndice);
}

function anteriorResultado() {
    if (resultadosBusqueda.length === 0) return;
    const nuevoIndice = (indiceActual - 1 + resultadosBusqueda.length) % resultadosBusqueda.length;
    irAResultado(nuevoIndice);
}

function actualizarContador() {
    const contador = document.getElementById('contador-resultados');
    if (contador && resultadosBusqueda.length > 0) {
        contador.textContent = `${indiceActual + 1} de ${resultadosBusqueda.length}`;
    }
}

function limpiarBusqueda() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    // Limpiar TODOS los <mark>, no solo los de búsqueda
    const marcas = container.querySelectorAll('mark');
    
    marcas.forEach(marca => {
        const parent = marca.parentNode;
        if (!parent) return;
        
        const texto = document.createTextNode(marca.textContent);
        parent.replaceChild(texto, marca);
        parent.normalize();
    });
    
    const mensaje = document.getElementById('search-results');
    if (mensaje) {
        mensaje.remove();
    }
    
    resultadosBusqueda = [];
    indiceActual = 0;
    buscando = false; // ← IMPORTANTE: resetear la bandera
}

function mostrarResultados(cantidad) {
    const mensajeAnterior = document.getElementById('search-results');
    if (mensajeAnterior) {
        mensajeAnterior.remove();
    }
    
    const mensaje = document.createElement('div');
    mensaje.id = 'search-results';
    mensaje.className = 'search-results-message';
    
    if (cantidad > 0) {
        mensaje.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.8rem;">
                <span><strong>✓</strong> <span id="contador-resultados">1 de ${cantidad}</span></span>
                ${cantidad > 1 ? `
                    <div style="display: flex; gap: 0.3rem;">
                        <button onclick="anteriorResultado()" class="nav-resultado-btn" title="Anterior">◀</button>
                        <button onclick="siguienteResultado()" class="nav-resultado-btn" title="Siguiente">▶</button>
                    </div>
                ` : ''}
            </div>
        `;
        mensaje.style.background = '#d4edda';
        mensaje.style.color = '#155724';
        mensaje.style.border = '2px solid #28a745';
    } else {
        mensaje.innerHTML = '<strong>✗</strong> No se encontraron resultados';
        mensaje.style.background = '#f8d7da';
        mensaje.style.color = '#721c24';
        mensaje.style.border = '2px solid #dc3545';
    }
    
    const searchContainer = document.querySelector('.header-search');
    if (searchContainer) {
        searchContainer.appendChild(mensaje);
    }
}