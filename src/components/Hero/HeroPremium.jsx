import {
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const desktopImage = "/images/imagenes/PORTADA.webp";
  const mobileImage = "/images/imagenes/PORTADA.webp";

  const audioRef = useRef(null);

  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        width: "100%",
        height: "100svh", // ✅ usa unidades seguras para viewport móvil (mejor que 100vh)
        margin: 0,
        padding: 0,
        backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
        backgroundSize: "cover", // ✅ ocupa completamente el contenedor
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        touchAction: "none", // evita scroll involuntario
      }}
    >
      {/* Capa transparente (puede eliminarse o ajustar si querés overlay oscuro) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "transparent",
          zIndex: 1,
        }}
      />

      {/* Audio element */}
      <audio ref={audioRef} src="/images/004/song.mp3" preload="auto" />

      {/* Flecha animada */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 10, md: 20 },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          animation: "bounce 2s infinite",
          fontSize: { xs: "2.5rem", md: "3rem" },
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "40%": {
              transform: "translateX(-50%) translateY(-10px)",
            },
            "60%": {
              transform: "translateX(-50%) translateY(-5px)",
            },
          },
        }}
      >
        <a href="#info" style={{ color: "#000", textDecoration: "none" }}>
          <KeyboardArrowDownIcon fontSize="inherit" />
        </a>
      </Box>
    </Box>
  );
};

export default Hero;
