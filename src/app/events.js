import { resetTopicChips, selectAllTopic } from '../utils/topics.js';

export const setupEventListeners = ({ loadPhotos, retry }) => {
  const searchForm = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search-input');

  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;
    searchInput.value = '';
    searchInput.blur();
    resetTopicChips();
    await loadPhotos(query);
  });

  document.querySelector('.search-icon-btn').addEventListener('click', () => searchForm.requestSubmit());

  const goHome = async () => {
    selectAllTopic();
    await loadPhotos();
  };
  document.querySelector('#logo-btn').addEventListener('click', goHome);
  document.querySelector('#nav-home').addEventListener('click', goHome);

  document.querySelector('main').addEventListener('click', async (event) => {
    if (event.target.closest('#retry-load')) return retry();

    const topicChip = event.target.closest('.topic-chip[data-topic]');
    if (topicChip) {
      resetTopicChips(topicChip);
      return loadPhotos(topicChip.dataset.topic === 'Todo' ? '' : topicChip.dataset.topic);
    }

    const suggestion = event.target.closest('.suggestion-tag');
    if (suggestion) {
      resetTopicChips();
      return loadPhotos(suggestion.dataset.query);
    }
  });
};
