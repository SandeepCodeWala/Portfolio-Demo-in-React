import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import AwesomeSlider from "react-awesome-slider";
import { ProjectType } from "@/i18n/config";
import glamlogo from "../../images/portfolio/animal-shelter/glamcodelogo.png";
import glam1 from "../../images/portfolio/animal-shelter/glamcode1.png";
import glam2 from "../../images/portfolio/animal-shelter/glamcode3.png";
import hairlogo from "../../images/portfolio/photography/hairlogo.png";
import life1 from "../../images/portfolio/adventure/life1.png";
import life2 from "../../images/portfolio/adventure/life2.png";
import lifelogo from "../../images/portfolio/adventure/lifelogo.png";
import ycLogo from "../../images/portfolio/YC/yclogo.png";
import yc1 from "../../images/portfolio/YC/yc1.png";
import yc2 from "../../images/portfolio/YC/yc2.png";
import yc3 from "../../images/portfolio/YC/yc4.png";
import yc4 from "../../images/portfolio/YC/yc5.png";
import yc5 from "../../images/portfolio/YC/yc6.png";
import yc6 from "../../images/portfolio/YC/yc7.png";
import jaytLogo from "../../images/portfolio/jayT/jaytlogo.png";
import jayt1 from "../../images/portfolio/jayT/jayt1.png";
import jayt2 from "../../images/portfolio/jayT/jayt2.png";
import hmLogo from "../../images/portfolio/hm/howmuch.png";
import hm1 from "../../images/portfolio/hm/hm1.png";
import hm2 from "../../images/portfolio/hm/hm2.png";



import hair1 from "../../images/portfolio/photography/hair1.png";
import hair2 from "../../images/portfolio/photography/hair2.png";

interface Props {
  open: boolean;
  onClose: () => void;
  project?: ProjectType;
}

const glamArr: string[] = [glamlogo, glam1, glam2];
const hairArr: string[] = [hairlogo, hair1, hair2];
const LifeArr: string[] = [lifelogo, life1, life2];
const ycArr: string[] = [ycLogo, yc1, yc2, yc3, yc4, yc5, yc6];
const jayTArr: string[] = [jaytLogo, jayt1, jayt2];
const hmArr: string[] = [hmLogo, hm1, hm2];


const ProjectDialog = ({ open, onClose, project }: Props) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all dark:bg-[#919191] dark:text-white sm:my-8 md:w-[800px]">
                <div className="flex justify-end">
                  <div className="bg-red-100 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <Icon
                      icon="material-symbols:close"
                      className="cursor-pointer text-2xl"
                      onClick={onClose}
                    />
                  </div>
                </div>

                <div className="mt-2 p-10">
                  <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
                    <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
                      <Icon icon="emojione:red-circle" width={10} />
                      <Icon icon="twemoji:yellow-circle" width={10} />
                      <Icon icon="twemoji:green-circle" width={10} />
                    </div>
                    <div
                      className="p-3 text-justify"
                      style={{
                        height: "auto",
                        fontSize: "132%",
                        lineHeight: "200%",
                      }}
                    >
                      <AwesomeSlider className="w-full" organicArrows={false}>
                        {project?.images[0] === "glam"
                          ? glamArr.map((img) => (
                              <div key={img} className="slider-image-container">
                                <img
                                  src={img}
                                  alt="Glam"
                                  className="slider-image"
                                />
                              </div>
                            ))
                          : project?.images[0] === "life"
                          ? LifeArr.map((img) => (
                              <div key={img} className="slider-image-container">
                                <img
                                  src={img}
                                  alt="Life"
                                  className="slider-image"
                                />
                              </div>
                            ))
                          : project?.images[0] === "jayT"
                          ? jayTArr.map((img) => (
                              <div key={img} className="slider-image-container">
                                <img
                                  src={img}
                                  alt="Life"
                                  className="slider-image"
                                />
                              </div>
                            ))
                            : project?.images[0] === "hm"
                            ? hmArr.map((img) => (
                                <div key={img} className="slider-image-container">
                                  <img
                                    src={img}
                                    alt="Life"
                                    className="slider-image"
                                  />
                                </div>
                              ))
                            : project?.images[0] === "YC"
                          ? ycArr.map((img) => (
                              <div key={img} className="slider-image-container">
                                <img
                                  src={img}
                                  alt="Life"
                                  className="slider-image"
                                />
                              </div>
                            ))
                          : hairArr.map((img) => (
                              <div key={img} className="slider-image-container">
                                <img
                                  src={img}
                                  alt="Hair"
                                  className="slider-image"
                                />
                              </div>
                            ))}
                      </AwesomeSlider>
                    </div>
                  </div>

                  <h2 className="mt-10 text-lg font-bold">{project?.title}</h2>
                  <p className="text-sm">{project?.description}</p>

                  <div className="mt-3 flex justify-center gap-3">
                    {project?.technologies?.map((tech) => (
                      <div className=" text-black dark:text-white">
                        <Icon icon={tech.class} fontSize="50px" />
                        <p className="mt-1 text-center text-xs">{tech.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"></div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProjectDialog;
