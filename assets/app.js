/**
 * Shared utility functions for interactive quiz components
 */

/**
 * Select a single DOM element
 * @param {string} selector - CSS selector
 * @returns {HTMLElement|null}
 */
function $(selector) {
    return document.querySelector(selector);
}

/**
 * Select multiple DOM elements
 * @param {string} selector - CSS selector
 * @returns {NodeList}
 */
function $$(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Save quiz answer to localStorage
 * @param {string} quizId - Unique identifier for the quiz
 * @param {string} answer - The selected answer
 * @param {boolean} isCorrect - Whether the answer is correct
 */
function saveQuizAnswer(quizId, answer, isCorrect) {
    const data = {
        answer: answer,
        isCorrect: isCorrect,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem(`quiz_${quizId}`, JSON.stringify(data));
}

/**
 * Load quiz answer from localStorage
 * @param {string} quizId - Unique identifier for the quiz
 * @returns {Object|null} - Quiz data or null if not found
 */
function loadQuizAnswer(quizId) {
    const data = localStorage.getItem(`quiz_${quizId}`);
    return data ? JSON.parse(data) : null;
}

/**
 * Clear quiz answer from localStorage
 * @param {string} quizId - Unique identifier for the quiz
 */
function clearQuizAnswer(quizId) {
    localStorage.removeItem(`quiz_${quizId}`);
}

/**
 * Display a feedback message
 * @param {HTMLElement} element - The feedback element
 * @param {string} type - 'success' or 'error'
 * @param {string} title - Feedback title
 * @param {string} text - Feedback text
 */
function showFeedback(element, type, title, text) {
    element.className = `feedback feedback-${type} show`;
    const titleEl = element.querySelector('.feedback-title');
    const textEl = element.querySelector('.feedback-text');
    
    if (titleEl) titleEl.textContent = title;
    if (textEl) textEl.textContent = text;
}

/**
 * Hide feedback message
 * @param {HTMLElement} element - The feedback element
 */
function hideFeedback(element) {
    element.classList.remove('show');
}

/**
 * Update status badge
 * @param {HTMLElement} badge - The badge element
 * @param {string} status - 'completed' or 'not-submitted'
 * @param {string} text - Badge text
 */
function updateStatusBadge(badge, status, text) {
    badge.className = `status-badge ${status}`;
    badge.textContent = text;
}

/**
 * Save completion data to localStorage
 * @param {string} QUIZ_ID - Unique identifier for the quiz
 * @param {Object} payload - Completion data (can be any structure)
 */
function saveCompletion(QUIZ_ID, payload) {
    const data = {
        ...payload,
        timestamp: new Date().toISOString(),
        completed: true
    };
    localStorage.setItem(`completion_${QUIZ_ID}`, JSON.stringify(data));
}

/**
 * Load completion data from localStorage
 * @param {string} QUIZ_ID - Unique identifier for the quiz
 * @returns {Object|null} - Completion data or null if not found
 */
function loadCompletion(QUIZ_ID) {
    const data = localStorage.getItem(`completion_${QUIZ_ID}`);
    return data ? JSON.parse(data) : null;
}

/**
 * Clear completion data from localStorage
 * @param {string} QUIZ_ID - Unique identifier for the quiz
 */
function clearCompletion(QUIZ_ID) {
    localStorage.removeItem(`completion_${QUIZ_ID}`);
}

