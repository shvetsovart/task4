const proficiencyInput = document.getElementById('proficiency');
const proficiencyLabel = document.getElementById('proficiency-label');

proficiencyInput.addEventListener('input', () => {
    proficiencyLabel.textContent = `Skill proficiency percentage, ${proficiencyInput.value}%`;
});