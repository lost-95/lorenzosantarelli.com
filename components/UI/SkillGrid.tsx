import React from 'react';
import { SkillGroup } from '../../types';

const SkillGrid: React.FC<{ groups: SkillGroup[] }> = ({ groups }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
    {groups.map((group) => (
      <div key={group.category} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-4">{group.category}</h3>
        <ul className="space-y-2.5">
          {group.items.map((item) => (
            <li key={item} className="text-slate-600 flex items-start gap-2 text-sm leading-snug">
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default SkillGrid;
