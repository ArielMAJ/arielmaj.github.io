import {FC, memo, PropsWithChildren} from 'react';
import ReactCardFlipper from 'react-card-flipper';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <ReactCardFlipper behavior="hover" className="ReactFlipCard flex flex-col">
      <div className="ReactFlipCard ReactFlipCard__Front center flex">
        <span className="text-center text-lg font-bold">{name}</span>
      </div>

      <div className="ReactFlipCard ReactFlipCard__Back center card flex flex-grow flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
        <div className="shine"></div>
        <div className="background">
          <div className="tiles">
            <div className="tile tile-1"></div>
            <div className="tile tile-2"></div>
            <div className="tile tile-3"></div>
            <div className="tile tile-4"></div>

            <div className="tile tile-5"></div>
            <div className="tile tile-6"></div>
            <div className="tile tile-7"></div>
            <div className="tile tile-8"></div>

            <div className="tile tile-9"></div>
            <div className="tile tile-10"></div>
          </div>

          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
    </ReactCardFlipper>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name} = skill;

  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium">
        <p>{name}</p>
      </span>
    </div>
  );
});

Skill.displayName = 'Skill';
