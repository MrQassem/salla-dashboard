import { useState } from 'react';
import { X, Sparkles, Loader, CheckCircle, TrendingUp, DollarSign, Mail, Users, Package, ArrowRight } from 'lucide-react';
import { getAISuggestions } from '../services/mockData';
import './AISuggestionsModal.css';

export default function AISuggestionsModal({ isRTL, onClose, onApply, context }) {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const [appliedSuggestions, setAppliedSuggestions] = useState(new Set());

  const fetchSuggestions = async () => {
    setLoading(true);
    try {
      const result = await getAISuggestions(context);
      setSuggestions(result);
    } catch (error) {
      console.error('Failed to fetch AI suggestions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = (suggestionId, targetId) => {
    onApply(suggestionId, targetId);
    setAppliedSuggestions(new Set([...appliedSuggestions, suggestionId]));
  };

  const getSuggestionIcon = (type) => {
    switch (type) {
      case 'product_copy':
        return Package;
      case 'pricing':
        return DollarSign;
      case 'email_campaign':
        return Mail;
      case 'segmentation':
        return Users;
      case 'inventory':
        return TrendingUp;
      default:
        return Sparkles;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content ai-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <Sparkles size={24} className="sparkle-icon" />
            <h2>{isRTL ? 'اقتراحات الذكاء الاصطناعي' : 'AI-Powered Suggestions'}</h2>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {!suggestions && !loading && (
            <div className="empty-state">
              <div className="empty-icon">
                <Sparkles size={48} />
              </div>
              <h3>{isRTL ? 'اكتشف فرص النمو' : 'Discover Growth Opportunities'}</h3>
              <p>
                {isRTL
                  ? 'دع الذكاء الاصطناعي يحلل بيانات متجرك ويقدم توصيات تكتيكية لزيادة المبيعات وتحسين التحويلات.'
                  : 'Let AI analyze your store data and provide tactical recommendations to boost sales, improve conversions, and optimize operations.'}
              </p>
              <button className="generate-btn" onClick={fetchSuggestions}>
                <Sparkles size={18} />
                <span>{isRTL ? 'إنشاء اقتراحات' : 'Generate Suggestions'}</span>
              </button>
            </div>
          )}

          {loading && (
            <div className="loading-state">
              <Loader size={48} className="spinner" />
              <h3>{isRTL ? 'يقوم الذكاء الاصطناعي بتحليل بياناتك...' : 'AI is analyzing your data...'}</h3>
              <p>{isRTL ? 'سيستغرق هذا بضع ثوان' : 'This will take a few seconds'}</p>
            </div>
          )}

          {suggestions && (
            <div className="suggestions-container">
              <div className="suggestions-header">
                <div className="suggestions-count">
                  {suggestions.suggestions.length} {isRTL ? 'اقتراحات' : 'suggestions'} {isRTL ? 'تم إنشاؤها' : 'generated'}
                </div>
                <div className="generated-time">
                  {new Date(suggestions.generatedAt).toLocaleString(isRTL ? 'ar-SA' : 'en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>

              <div className="suggestions-list">
                {suggestions.suggestions.map((suggestion) => {
                  const Icon = getSuggestionIcon(suggestion.type);
                  const isApplied = appliedSuggestions.has(suggestion.id);

                  return (
                    <div key={suggestion.id} className="suggestion-card">
                      <div className="suggestion-header">
                        <div className="suggestion-icon">
                          <Icon size={20} />
                        </div>
                        <div className="suggestion-title-section">
                          <h4>{suggestion.title}</h4>
                          <span className="suggestion-type">
                            {suggestion.type.replace('_', ' ')}
                          </span>
                        </div>
                      </div>

                      <p className="suggestion-description">{suggestion.description}</p>

                      <div className="recommendation-list">
                        {suggestion.recommendations.map((rec, i) => (
                          <div key={i} className="recommendation-item">
                            <ArrowRight size={14} />
                            <span>{rec}</span>
                          </div>
                        ))}
                      </div>

                      <div className="suggestion-footer">
                        <div className="impact-badge">
                          <TrendingUp size={14} />
                          <span>{suggestion.estimatedImpact}</span>
                        </div>
                        {isApplied ? (
                          <button className="apply-btn applied" disabled>
                            <CheckCircle size={16} />
                            <span>{isRTL ? 'تم التطبيق' : 'Applied'}</span>
                          </button>
                        ) : (
                          <button
                            className="apply-btn"
                            onClick={() => handleApply(suggestion.id, suggestion.targetId)}
                          >
                            <span>{isRTL ? 'تطبيق التحديث' : 'Apply Update'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="modal-footer">
                <button className="refresh-btn" onClick={fetchSuggestions}>
                  <Sparkles size={16} />
                  <span>{isRTL ? 'إنشاء اقتراحات جديدة' : 'Generate New Suggestions'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
