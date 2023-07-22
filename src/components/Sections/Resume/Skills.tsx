import {FC, memo, PropsWithChildren} from 'react';
// import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

import ReactCardFlipper from 'react-card-flipper';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    // <ReactCardFlipper className="ReactFlipCard flex flex-col" behavior="click" levitate={true}>
    <ReactCardFlipper className="ReactFlipCard flex flex-col" behavior="hover">
      <div className="ReactFlipCard ReactFlipCard__Front center flex shadow">
        <span className="text-center text-lg font-bold">{name}</span>
      </div>
      <div className="ReactFlipCard ReactFlipCard__Back center flex flex-grow flex-col gap-y-2 shadow">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </ReactCardFlipper>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name} = skill;
  // const {name, level, max = 10} = skill;

  // const percentage = useMemo(() => Math.round(((level ? level : 0) / max) * 100), [level, max]);

  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium">{name}</span>
      {/* <div className="flex h-5 w-full justify-center overflow-hidden rounded-full bg-neutral-300"> */}
      {/* <div
          className="flex h-full justify-center rounded-full bg-orange-400"
          style={{width: level === null || level === undefined ? `100%` : `${percentage}%`}}>
        </div> */}
      {/* </div> */}
    </div>
  );
});

Skill.displayName = 'Skill';
