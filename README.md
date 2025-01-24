# react-ui kt (ahyeon-react-ui-kit)

##프로젝트 소개

> React를 기반으로 한 UI 컴포넌트 라이브러리

##사용 방법

```
npm install ahyeon-react-ui-kit
```

##Components

### 1. Accordion

#### Children

-AccordionItem
-AccordionTrigger
-AccordionContent

#### example

```tsx
<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>first</Accordion.Trigger>
    <Accordion.Content>first content</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>second</Accordion.Trigger>
    <Accordion.Content>second content</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>third</Accordion.Trigger>
    <Accordion.Content>third content</Accordion.Content>
  </Accordion.Item>
</Accordion>
```
