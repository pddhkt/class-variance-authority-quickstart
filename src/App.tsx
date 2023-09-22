import { Button, ButtonProps } from "./components/Button";
import ButtonExample from "./components/ButtonExample";
import Hero from "./components/Hero";


const sizes: ButtonProps["size"][] = ["sm", "md", "lg", "xl"];
const buttonOptions: ButtonProps["intent"][] = ["primary", "secondary"];



function App() {

  return (
    <div className="bg-theme-base text-theme-900 text-center">
      <div className="grid min-h-screen place-content-center p-6 lg:p-8 relative z-0 overflow-hidden">
        <Hero />
        <div className="mx-auto">
          <div className="grid place-items-center gap-12 mt-16">
          {buttonOptions.map((intent) => (
            <div key={intent} className="flex gap-6 justify-center items-center">
              <div className="grid gap-2 ">
                  <h2 className="text-xl tracking-wide font-bold uppercase">
                    {intent} Buttons
                  </h2>
                  <div className="flex gap-4 flex-wrap items-center justify-center">
                    {sizes.map((size, index) => (
                      <Button key={size} intent={intent} size={size} disabled={index === 4}>
                          leran more
                      </Button>
                    ))}
                  </div>
              </div>

                <div key={intent} className="grid gap-4 justify-center items-center">
                <h2 className="text-xl tracking-wide font-bold uppercase">
                  {intent} Icon
                </h2>
                <div className="flex gap-2 flex-wrap items-center justify-center">
                  {sizes.map((size, index) => (
                    <Button key={size} intent={intent} btnType={"icon"} size={size} disabled={index === 4}>
                        +
                    </Button>
                  ))}
                </div>
            </div>
          </div>
          ))}
     
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
