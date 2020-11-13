import React, { useRef } from 'react';

import Profile from '../profile';
import Button from '../button';

import { ArrowIosBackOutline as LeftIcon } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import { ArrowIosForwardOutline as RightIcon } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';

import * as S from './styles';

const Carousel = ({ items, editable }) => {
  const ref = useRef(null);

  const onClickNext = () => {
    ref.current.scrollLeft += S.SCROLL_VALUE;
  };
  const onClickPrev = () => {
    ref.current.scrollLeft -= S.SCROLL_VALUE;
  };

  return (
    <S.Wrapper>
      <Button round icon={<LeftIcon />} onClick={onClickPrev} />
      <S.Carousel ref={ref}>
        {items.map(item => (
          <S.Item key={`carousel-item-${item.name}`}>
            <Profile {...item} editable={editable} />
          </S.Item>
        ))}
      </S.Carousel>
      <Button round icon={<RightIcon />} onClick={onClickNext} />
    </S.Wrapper>
  );
};

export default Carousel;
