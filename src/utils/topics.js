export const resetTopicChips = (activeChip = null) => {
  document.querySelectorAll('.topic-chip').forEach((chip) => {
    const isActive = chip === activeChip;
    chip.classList.toggle('active', isActive);
    chip.setAttribute('aria-pressed', String(isActive));
  });
};

export const selectAllTopic = () => {
  resetTopicChips(document.querySelector('.topic-chip[data-topic="Todo"]'));
};
