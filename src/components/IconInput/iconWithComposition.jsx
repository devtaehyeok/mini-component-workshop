const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const iconSize = size === 'small' ? 16 : 24;
  const Input = size === 'small' ? SmallInput : LargeInput;
  return (
    <Wrapper>
      <IconWrapper style={{ '--size': iconSize + 'px' }}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <Input
        {...delegated}
        style={{
          '--width': width + 'px',
        }}
      />
    </Wrapper>
  );
};
const TextInput = styled.input`
  width: var(--width);
  border: none;
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
const SmallInput = styled(TextInput)`
  height: 24px;
  font-size: ${14 / 16}rem;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 24px;
`;
const LargeInput = styled(TextInput)`
  height: 36px;
  font-size: ${18 / 16}rem;
  border-bottom: 2px solid ${COLORS.black};
  padding-left: 36px;
`;
