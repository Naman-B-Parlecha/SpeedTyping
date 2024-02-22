import Keyboard from "react-simple-keyboard";
export default function CustomKeyboard({ layoutName, keyboardOptions }) {
  return (
    <div className={"keyboardContainer"}>
      <Keyboard
        baseClass={"simple-keyboard-main"}
        layoutName={layoutName}
        {...keyboardOptions}
        buttonTheme={[
          {
            buttons:
              "` 1 ~ ! ) - + {backspace} 0 _ = {tab} Q q P p { [ ] } \\ | {capslock} A a : ; \" ' {enter} {shiftleft} Z z X x / ? {shiftright} {controlleft} {altleft} {altright} {controlright}",
            class: "color1",
          },
          { buttons: "2 @ 9 ( W w O o S s L l C c > .", class: "color2" },
          { buttons: "3 # 8 * E e D d  , < K k I i V v", class: "color3" },
          { buttons: "4 $ 5 % R r T t F f G g  B b", class: "color4" },
          { buttons: "6 ^ 7 & Y y U u H h J j N n M m", class: "color5" },
          { buttons: " {space} ", class: "color6" },
        ]}
      />
    </div>
  );
}
