/* DATOS DE LA MALLA */
// Definimos los ramos. "req" es un array con los IDs de los prerrequisitos.
// 'LICENCIATURA' es un código especial para el ciclo de internados.

const subjectsData = [
    // --- SEMESTRE 1 ---
    { id: 's1_biocel', sem: 1, name: 'Biología Celular', req: [] },
    { id: 's1_quimica', sem: 1, name: 'Química General y Orgánica', req: [] },
    { id: 's1_fisica', sem: 1, name: 'Bases Físico-Matemáticas', req: [] },
    { id: 's1_bases', sem: 1, name: 'Bases y Fundamentos de Medicina', req: [] },
    { id: 's1_abp1', sem: 1, name: 'Integración ABP I', req: [] },
    { id: 's1_estrategias', sem: 1, name: 'Estrategias para el Aprendizaje', req: [] },

    // --- SEMESTRE 2 ---
    { id: 's2_biomol', sem: 2, name: 'Biología Molecular y Genética', req: ['s1_biocel'] },
    { id: 's2_bioquim', sem: 2, name: 'Bioquímica General', req: ['s1_biocel', 's1_quimica'] },
    { id: 's2_soporte', sem: 2, name: 'Soporte Básico Vital', req: ['s1_biocel'] },
    { id: 's2_historia', sem: 2, name: 'Historia de la Medicina', req: ['s1_bases'] },
    { id: 's2_morfo1', sem: 2, name: 'Morfología Integrada I', req: ['s1_abp1'] },
    { id: 's2_abp2', sem: 2, name: 'Integración ABP II', req: ['s1_abp1'] },
    { id: 's2_antro', sem: 2, name: 'Antropología', req: [] },

    // --- SEMESTRE 3 ---
    { id: 's3_bioest', sem: 3, name: 'Bioestadística y MBE', req: [] },
    { id: 's3_micro', sem: 3, name: 'Microbiología Médica', req: ['s2_soporte', 's2_biomol'] },
    { id: 's3_fisio', sem: 3, name: 'Fisiología Médica', req: ['s2_biomol', 's2_morfo1', 's2_bioquim'] },
    { id: 's3_psico', sem: 3, name: 'Psicología Aplicada', req: ['s2_historia'] },
    { id: 's3_morfo2', sem: 3, name: 'Morfología Integrada II', req: ['s2_morfo1', 's2_biomol'] },
    { id: 's3_etica', sem: 3, name: 'Ética', req: ['s2_antro'] },

    // --- SEMESTRE 4 ---
    { id: 's4_fisiopat', sem: 4, name: 'Fisiopatología Médica', req: ['s3_fisio'] },
    { id: 's4_saludpop', sem: 4, name: 'Salud Poblacional', req: ['s3_bioest'] },
    { id: 's4_morfo3', sem: 4, name: 'Morfología Integrada III', req: ['s3_fisio', 's3_morfo2'] },
    { id: 's4_razon1', sem: 4, name: 'Razonamiento Médico - Clínico I', req: ['s3_fisio', 's3_morfo2'] },
    { id: 's4_electivo2', sem: 4, name: 'Electivo Formación Integral II', req: [] }, // Asumo sin requisito explícito si no está listado

    // --- SEMESTRE 5 ---
    { id: 's5_semio1', sem: 5, name: 'Semiología I', req: ['s4_fisiopat', 's4_morfo3', 's4_razon1', 's1_bases'] },
    { id: 's5_patol', sem: 5, name: 'Patología Médica', req: ['s3_micro', 's4_morfo3'] },
    { id: 's5_epidem', sem: 5, name: 'Epidemiología', req: ['s4_saludpop'] },
    { id: 's5_bioetica', sem: 5, name: 'Bioética', req: ['s4_razon1'] },
    { id: 's5_electivo1', sem: 5, name: 'Electivo Formación Integral I', req: ['s3_etica'] },
    { id: 's5_electivo2b', sem: 5, name: 'Electivo Formación Integral III', req: [] }, // Ajusté nombre para evitar duplicado de ID

    // --- SEMESTRE 6 ---
    { id: 's6_semio2', sem: 6, name: 'Semiología II', req: ['s5_semio1', 's5_patol'] },
    { id: 's6_farmaco', sem: 6, name: 'Farmacología General', req: ['s5_patol'] },
    { id: 's6_metod', sem: 6, name: 'Metodología de la Investigación', req: ['s3_bioest'] }, // Simplificado req MBE
    { id: 's6_saludig', sem: 6, name: 'Salud Digital', req: ['s5_semio1'] },
    { id: 's6_razon2', sem: 6, name: 'Razonamiento Médico - Clínico II', req: ['s5_semio1', 's5_patol'] },
    { id: 's6_electivo4', sem: 6, name: 'Electivo Formación Integral IV', req: [] },

    // --- SEMESTRE 7 ---
    { id: 's7_medint1', sem: 7, name: 'Medicina Interna I', req: ['s6_semio2', 's6_razon2', 's3_micro'] },
    { id: 's7_ciru1', sem: 7, name: 'Cirugía I', req: ['s6_semio2', 's6_razon2', 's3_micro'] },
    { id: 's7_psiq1', sem: 7, name: 'Psiquiatría I', req: ['s6_semio2', 's6_razon2', 's3_micro'] },
    { id: 's7_pueblos', sem: 7, name: 'Salud Pueblos Originarios', req: ['s6_razon2'] },

    // --- SEMESTRE 8 ---
    { id: 's8_medint2', sem: 8, name: 'Medicina Interna II', req: ['s7_medint1'] },
    { id: 's8_ciru2', sem: 8, name: 'Cirugía II', req: ['s7_ciru1'] },
    { id: 's8_psiq2', sem: 8, name: 'Psiquiatría II', req: ['s7_psiq1'] },
    { id: 's8_legal', sem: 8, name: 'Medicina Legal', req: ['s7_pueblos'] },

    // --- SEMESTRE 9 ---
    { id: 's9_ped1', sem: 9, name: 'Pediatría I', req: ['s8_medint2', 's8_psiq2', 's8_legal'] },
    { id: 's9_gine1', sem: 9, name: 'Ginecología - Obstetricia I', req: ['s8_medint2', 's8_ciru2', 's8_legal'] },
    { id: 's9_espec1', sem: 9, name: 'Especialidades I', req: ['s8_medint2'] },
    { id: 's9_medfam', sem: 9, name: 'Medicina Familiar', req: ['s8_medint2'] },
    { id: 's9_paliat', sem: 9, name: 'Cuidados Paliativos', req: ['s8_medint2', 's8_ciru2', 's8_psiq2', 's8_legal'] },
    { id: 's9_saludap', sem: 9, name: 'Salud Poblacional Aplicada', req: ['s8_legal'] },

    // --- SEMESTRE 10 ---
    { id: 's10_ped2', sem: 10, name: 'Pediatría II', req: ['s9_ped1'] },
    { id: 's10_gine2', sem: 10, name: 'Ginecología - Obstetricia II', req: ['s9_gine1'] },
    { id: 's10_espec2', sem: 10, name: 'Especialidades II', req: ['s9_medfam', 's9_paliat'] },
    { id: 's10_urg', sem: 10, name: 'Medicina de Urgencia', req: ['s9_ped1', 's9_gine1', 's9_paliat'] },
    { id: 's10_razon3', sem: 10, name: 'Razonamiento Médico - Clínico III', req: ['s9_medfam', 's9_paliat'] },

    // --- CICLO DE INTERNADOS (Requieren Licenciatura = Sem 1-10 completos) ---
    // Usaremos 'LICENCIATURA' como key especial en la lógica
    
    // SEMESTRE 11
    { id: 's11_int_med', sem: 11, name: 'Internado Medicina Interna', req: ['LICENCIATURA'] },
    { id: 's11_int_ped', sem: 11, name: 'Internado Pediatría', req: ['LICENCIATURA'] },

    // SEMESTRE 12
    { id: 's12_int_ment', sem: 12, name: 'Internado Salud Mental', req: ['LICENCIATURA'] },
    { id: 's12_int_fam', sem: 12, name: 'Internado Med. Familiar', req: ['LICENCIATURA'] },
    { id: 's12_int_elec1', sem: 12, name: 'Internado Electivo I', req: ['LICENCIATURA'] },

    // SEMESTRE 13
    { id: 's13_int_esp', sem: 13, name: 'Int. Especialidades Med. Interna', req: ['s11_int_med', 's12_int_ment'] },
    { id: 's13_int_cir', sem: 13, name: 'Internado Cirugía y Urología', req: ['s11_int_med'] },
    { id: 's13_int_elec2', sem: 13, name: 'Internado Electivo II', req: ['s11_int_ped', 's12_int_fam'] },

    // SEMESTRE 14
    { id: 's14_int_gine', sem: 14, name: 'Internado Ginecología', req: ['s13_int_esp', 's13_int_cir'] },
    { id: 's14_int_urg', sem: 14, name: 'Internado Urgencia y Trauma', req: ['s11_int_med', 's11_int_ped', 's13_int_cir', 's12_int_fam'] },
    { id: 's14_razon4', sem: 14, name: 'Razonamiento Médico - Clínico IV', req: ['s13_int_esp', 's13_int_cir', 's13_int_elec2'] }
];

// Estado global de ramos aprobados (se carga desde localStorage)
let approvedSubjects = new Set(JSON.parse(localStorage.getItem('approvedSubjects')) || []);

// Función principal de inicialización
function init() {
    renderMalla();
    updateProgress();
}

// Verifica si la "Licenciatura" (Sem 1-10) está completa
function checkLicenciatura() {
    // Filtramos todos los ramos de semestres 1 al 10
    const basicCycle = subjectsData.filter(s => s.sem <= 10);
    // Verificamos si todos están en el set de aprobados
    return basicCycle.every(s => approvedSubjects.has(s.id));
}

// Verifica si un ramo está desbloqueado
function isUnlocked(subject) {
    // Caso especial: Licenciatura
    if (subject.req.includes('LICENCIATURA')) {
        if (!checkLicenciatura()) return false;
    }

    // Chequeo normal de requisitos por ID
    // Filtramos 'LICENCIATURA' del array para no buscarlo como ID de ramo
    const realReqs = subject.req.filter(r => r !== 'LICENCIATURA');
    
    // Si todos los requisitos están en approvedSubjects, retorna true
    return realReqs.every(reqId => approvedSubjects.has(reqId));
}

// Obtiene nombres de requisitos faltantes
function getMissingRequisites(subject) {
    let missing = [];
    
    if (subject.req.includes('LICENCIATURA')) {
        if (!checkLicenciatura()) {
            missing.push("Licenciatura completa (Todos los ramos sem 1-10)");
        }
    }

    const realReqs = subject.req.filter(r => r !== 'LICENCIATURA');
    realReqs.forEach(reqId => {
        if (!approvedSubjects.has(reqId)) {
            const reqSubject = subjectsData.find(s => s.id === reqId);
            if (reqSubject) missing.push(reqSubject.name);
        }
    });
    return missing;
}

// Renderiza la malla en el DOM
function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = ''; // Limpiar

    // Agrupar por semestres (1 al 14)
    for (let i = 1; i <= 14; i++) {
        const semesterCol = document.createElement('div');
        semesterCol.className = 'semester-column';
        
        const title = document.createElement('div');
        title.className = 'semester-title';
        title.textContent = `Sem ${i}`;
        semesterCol.appendChild(title);

        // Filtrar ramos de este semestre
        const semesterSubjects = subjectsData.filter(s => s.sem === i);

        semesterSubjects.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'subject-card';
            card.textContent = sub.name;
            
            const approved = approvedSubjects.has(sub.id);
            const unlocked = isUnlocked(sub);

            if (approved) {
                card.classList.add('approved');
            } else if (!unlocked) {
                card.classList.add('locked');
                card.title = "Faltan requisitos";
            }

            // Evento Click
            card.onclick = () => toggleSubject(sub);

            semesterCol.appendChild(card);
        });

        container.appendChild(semesterCol);
    }
}

// Maneja el click en un ramo
function toggleSubject(subject) {
    if (approvedSubjects.has(subject.id)) {
        // Si ya está aprobado, lo desaprobamos (desmarcar)
        // PERO: Deberíamos verificar si desaprobarlo bloquea otros ramos futuros aprobados.
        // Por simplicidad visual, permitimos desmarcar, y al renderizar, los futuros se bloquearán visualmente 
        // (o se mantendrán aprobados pero "inválidos", depende de la lógica estricta).
        // Aquí simplemente lo quitamos.
        approvedSubjects.delete(subject.id);
    } else {
        // Intentar aprobar
        if (isUnlocked(subject)) {
            approvedSubjects.add(subject.id);
        } else {
            // Mostrar alerta de bloqueo
            showModal(subject);
            return; // No guardamos cambios ni renderizamos
        }
    }
    
    saveAndRender();
}

// Muestra el modal con requisitos faltantes
function showModal(subject) {
    const modal = document.getElementById('alert-modal');
    const msg = document.getElementById('modal-message');
    const missing = getMissingRequisites(subject);
    
    msg.innerHTML = `Para tomar <b>${subject.name}</b> necesitas aprobar:<br><br>• ${missing.join('<br>• ')}`;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('alert-modal').style.display = 'none';
}

// Cerrar modal al hacer click fuera
window.onclick = function(event) {
    const modal = document.getElementById('alert-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Guardar en localStorage y actualizar vista
function saveAndRender() {
    localStorage.setItem('approvedSubjects', JSON.stringify([...approvedSubjects]));
    renderMalla();
    updateProgress();
}

// Calcular y actualizar barra de progreso
function updateProgress() {
    const total = subjectsData.length;
    const approved = approvedSubjects.size;
    const percent = Math.round((approved / total) * 100);
    
    document.getElementById('progress-text').textContent = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

// Reiniciar todo
function resetProgress() {
    if(confirm("¿Estás seguro de querer borrar todo tu progreso?")) {
        approvedSubjects.clear();
        saveAndRender();
    }
}

// Iniciar al cargar
document.addEventListener('DOMContentLoaded', init);

