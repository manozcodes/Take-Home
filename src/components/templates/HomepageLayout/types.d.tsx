export type HomepageLayoutProps = {
  children: React.ReactNode;
  formTitle: string;
  formSubtitle: string;
  setIsCancelFormVisible: (isVisible: boolean) => void;
  setIsFormVisible: (isVisible: boolean) => void;
};
