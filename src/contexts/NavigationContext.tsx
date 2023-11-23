import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react"

type NavigationContextType = {
  currentLocation: string
  setLocation: (location: string) => void
}

type NavigationContextProps = {
  children: ReactNode
}

export const NavigationContext = createContext<NavigationContextType>(
  {} as NavigationContextType
)

export const NavigationContextProvider = ({
  children,
}: NavigationContextProps) => {
  const [currentLocation, setCurrentLocation] = useState<string>("")

  useEffect(() => {
    if(window.location.pathname === "/") setCurrentLocation("HOME")
  }, [])

  const setLocation = (location: string) => {
    setCurrentLocation(location)
  }

  return (
    <NavigationContext.Provider
      value={{
        currentLocation,
        setLocation,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => {
  const useNavigationContext = useContext(NavigationContext)
  return useNavigationContext
}
