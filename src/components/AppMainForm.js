import React from 'react';
import styled from 'styled-components';
import theme from '../theme/Variable';

const AppMainForm = props => (
  <Form>
    <Row>
      <Column>
        <Group>
          <Label>Name</Label>
          <Input type="text" />
        </Group>
      </Column>
    </Row>

    <Row>
      <Column>
        <Group>
          <Label>Email</Label>
          <Input type="text" />
        </Group>
      </Column>
    </Row>

    <Row>
      <Column>
        <Group>
          <Label>Message</Label>
          <Input type="text" />
        </Group>
      </Column>
    </Row>

    <Button type="submit">Send Message</Button>
  </Form>
);

export default AppMainForm;

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
`;

const Column = styled.div`
  position: relative;
  width: 100%;
  padding-right: 5px;
  padding-left: 5px;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
`;

const Form = styled.form`
  display: block;
  margin-top: 0em;
`;

const Group = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  cursor: default;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font: inherit;
  line-height: 1.5;
  background: ${theme.white};
  background-clip: padding-box;
  border: 1px solid ${theme.grey};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    background: ${theme.white};
    border-color: ${theme.tertiary};
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.25);
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  cursor: pointer;
  color: ${theme.white};
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: ${theme.primary};
  border: 1px solid transparent;
  padding: 12px 24px !important;
  font: inherit;
  font-size: 1rem;

  &:hover {
    background: ${theme.grey};
    color: ${theme.black};
  }
`;
