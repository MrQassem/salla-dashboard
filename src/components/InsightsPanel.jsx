import { Lightbulb, AlertTriangle, TrendingUp, Info, Zap, ArrowRight } from 'lucide-react';
import './InsightsPanel.css';

export default function InsightsPanel({ insights, areasToImprove, isRTL, onGetAISuggestions }) {
  const getInsightIcon = (type) => {
    switch (type) {
      case 'opportunity':
        return { icon: TrendingUp, color: '#10b981' };
      case 'warning':
        return { icon: AlertTriangle, color: '#f59e0b' };
      case 'info':
        return { icon: Info, color: '#3b82f6' };
      default:
        return { icon: Lightbulb, color: '#8b5cf6' };
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'critical':
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#3b82f6';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="insights-container">
      {/* Key Insights */}
      <div className="insights-panel">
        <div className="panel-header">
          <div className="header-left">
            <Lightbulb size={20} />
            <h3>{isRTL ? 'رؤى ذكية' : 'Smart Insights'}</h3>
          </div>
          <button className="ai-button" onClick={onGetAISuggestions}>
            <Zap size={16} />
            <span>{isRTL ? 'احصل على اقتراحات الذكاء الاصطناعي' : 'Get AI Suggestions'}</span>
          </button>
        </div>

        <div className="insights-grid">
          {insights.slice(0, 6).map((insight) => {
            const iconInfo = getInsightIcon(insight.type);
            const Icon = iconInfo.icon;
            const impactColor = getImpactColor(insight.impact);

            return (
              <div key={insight.id} className={`insight-card insight-${insight.type}`}>
                <div className="insight-icon" style={{ backgroundColor: `${iconInfo.color}20`, color: iconInfo.color }}>
                  <Icon size={18} />
                </div>
                <div className="insight-content">
                  <div className="insight-header">
                    <h4>{isRTL ? insight.titleAr : insight.title}</h4>
                    <span className="insight-impact" style={{ backgroundColor: `${impactColor}20`, color: impactColor }}>
                      {insight.impact}
                    </span>
                  </div>
                  <p>{isRTL ? insight.descriptionAr : insight.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Areas to Improve */}
      <div className="improve-panel">
        <div className="panel-header">
          <div className="header-left">
            <AlertTriangle size={20} />
            <h3>{isRTL ? 'مجالات للتحسين' : 'Areas to Improve'}</h3>
          </div>
          <span className="priority-note">
            {isRTL ? 'مرتبة حسب: التأثير ÷ الجهد' : 'Sorted by: Impact ÷ Effort'}
          </span>
        </div>

        <div className="improve-list">
          {areasToImprove.map((area, index) => (
            <div key={area.id} className="improve-card">
              <div className="improve-rank">#{index + 1}</div>
              <div className="improve-content">
                <div className="improve-header">
                  <h4>{isRTL ? area.titleAr : area.title}</h4>
                  <div className="improve-metrics">
                    <div className="metric">
                      <span className="metric-label">{isRTL ? 'التأثير' : 'Impact'}</span>
                      <div className="metric-bar">
                        <div
                          className="metric-fill impact-fill"
                          style={{ width: `${area.impact * 10}%` }}
                        ></div>
                      </div>
                      <span className="metric-value">{area.impact}/10</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">{isRTL ? 'الجهد' : 'Effort'}</span>
                      <div className="metric-bar">
                        <div
                          className="metric-fill effort-fill"
                          style={{ width: `${area.effort * 10}%` }}
                        ></div>
                      </div>
                      <span className="metric-value">{area.effort}/10</span>
                    </div>
                  </div>
                  <div className="score-badge">
                    {isRTL ? 'النتيجة:' : 'Score:'} {area.score.toFixed(1)}
                  </div>
                </div>
                <p className="improve-description">{isRTL ? area.descriptionAr : area.description}</p>
                <div className="action-list">
                  <div className="action-header">{isRTL ? 'الإجراءات:' : 'Actions:'}</div>
                  {area.actions.map((action, i) => (
                    <div key={i} className="action-item">
                      <ArrowRight size={14} />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
