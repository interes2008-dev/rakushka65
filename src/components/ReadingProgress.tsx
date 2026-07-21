/**
 * Полоса прогресса чтения вверху страницы.
 * Анимация на нативном CSS (animation-timeline: scroll()), без JS-обработчиков скролла.
 * Там, где scroll-timeline не поддерживается, полоса просто скрыта (см. index.css).
 */
const ReadingProgress = () => {
  return <div className="reading-progress" aria-hidden="true" />;
};

export default ReadingProgress;
