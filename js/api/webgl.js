chrome.runtime.sendMessage({method: "current_profile"}, function (response) {

        
    var scriptCode = '(' + function (WebGLInject) {
    let response = JSON.parse(webglResponseStr);         
    const webglNoise = response.webglNoise; 
    const IS_WEBGL2 = true;
    const webglNoiseR = response.webglNoiseR;
    const webglNoiseG = response.webglNoiseG;
    const webglNoiseB = response.webglNoiseB;
    const webglNoiseA = response.webglNoiseA;
    const webglNoiseString1 = response.webglNoiseString1;
    const webglNoiseString2 = response.webglNoiseString2;


    const seed = response.seed;
    
    const unmaskedvendorwebgl = response.unmaskedVendorWebgl;
    const unmaskedrendererwebgl = response.unmaskedRendererWebgl;
    const webglrenderer = response.webglRenderer;
    const webglvendor = response.webglVendor;
    const shadinglanguageversion = response.shadinglanguageversion;
    const glversion = response.glVersion;
    const aliasedlinewidthrange = response.aliasedLineWidthRange;
    const aliasedpointsizerange = response.aliasedPointSizeRange;
    const alphabits = response.alphaBits;
    const bluebits = response.blueBits;
    const greenbits = response.greenBits;
    const redbits = response.redBits;
    const maxdrawbufferswebgl = response.maxDrawBuffers;
    const stencilbits = response.stencilBits;
    const depthbits = response.depthBits;
    const maxtexturemaxanisotropyext = response.maxTextureMaxAnisotropyExt;
    const maxvertexattribs = response.maxVertexattribs;
    const maxcombinedtextureimageunits = response.maxCombinedTextureImageUnits;
    const maxcubemaptexturesize = response.maxCubeMapTextureSize;
    const maxrenderbuffersize = response.maxRenderBufferSize;
    const maxtexturesize = response.maxTextureSize;
    const maxfragmentuniformvectors = response.maxFragmentUniformVectors;
    const maxvertexuniformvectors = response.maxVertexuniformvectors;
    const maxtextureimageunits = response.maxTextureImageUnits;
    const maxvaryingvectors = response.maxVaryingVectors;
    const maxvertextextureimageunits = response.maxVertexTextureImageUnits;
    const maxviewportdims = response.maxViewportDims;
    const WEBGL2_MAX_VERTEX_UNIFORM_COMPONENTS = response.maxVertexUniformComponents;
    const WEBGL2_MAX_VERTEX_UNIFORM_BLOCKS = response.maxVertexUniformBlocks;
    const WEBGL2_MAX_VERTEX_OUTPUT_COMPONENTS = response.maxVertexOutputComponents;
    const WEBGL2_MAX_VARYING_COMPONENTS = response.maxVaryingComponents;
    const WEBGL2_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = response.maxTransformFeedbackInterleavedComponents;
    const WEBGL2_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = response.maxTransformFeedbackSeparateAttribs;
    const WEBGL2_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = response.maxTransformFeedbackSeparateComponents;
    const WEBGL2_MAX_FRAGMENT_UNIFORM_COMPONENTS = response.maxFragmentUniformComponents;
    const WEBGL2_MAX_FRAGMENT_UNIFORM_BLOCKS = response.maxFragmentUniformBlocks;
    const WEBGL2_MAX_FRAGMENT_INPUT_COMPONENTS = response.maxFragmentInputComponents;
    const WEBGL2_MIN_PROGRAM_TEXEL_OFFSET = response.minProgramTexelOffset;
    const WEBGL2_MAX_PROGRAM_TEXEL_OFFSET = response.maxProgramTexelOffset;
    const WEBGL2_MAX_DRAW_BUFFERS = response.maxDrawBuffers;
    const WEBGL2_MAX_COLOR_ATTACHMENTS = response.maxColorAttachments;
    const WEBGL2_MAX_SAMPLES = response.maxSamples;
    const WEBGL2_MAX_3D_TEXTURE_SIZE = response.max3dTextureSize;
    const WEBGL2_MAX_ARRAY_TEXTURE_LAYERS = response.maxArrayTextureLayers;
    const WEBGL2_MAX_TEXTURE_LOD_BIAS = response.maxTextureLodBias;
    const WEBGL2_MAX_UNIFORM_BUFFER_BINDINGS = response.maxUniformBufferBindings;
    const WEBGL2_MAX_UNIFORM_BLOCK_SIZE = response.maxUniformBlockSize;
    const WEBGL2_UNIFORM_BUFFER_OFFSET_ALIGNMENT = response.uniformBufferOffsetAlignment;
    const WEBGL2_MAX_COMBINED_UNIFORM_BLOCKS = response.maxCombinedUniformBlocks;
    const WEBGL2_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = response.maxCombinedVertexUniformComponents;
    const WEBGL2_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = response.maxCombinedFragmentUniformComponents;

    const WEBGL2_ARRAY_BUFFER_BINDING = response.WEBGL2_ARRAY_BUFFER_BINDING;
    const WEBGL2_ACTIVE_TEXTURE = response.WEBGL2_ACTIVE_TEXTURE;
    const WEBGL2_BLEND = response.WEBGL2_BLEND;
    const WEBGL2_BLEND_COLOR = response.WEBGL2_BLEND_COLOR;
    const WEBGL2_BLEND_DST_ALPHA = response.WEBGL2_BLEND_DST_ALPHA;
    const WEBGL2_BLEND_DST_RGB = response.WEBGL2_BLEND_DST_RGB;
    const WEBGL2_BLEND_EQUATION_ALPHA = response.WEBGL2_BLEND_EQUATION_ALPHA;
    const WEBGL2_BLEND_EQUATION_RGB = response.WEBGL2_BLEND_EQUATION_RGB;
    const WEBGL2_BLEND_SRC_ALPHA = response.WEBGL2_BLEND_SRC_ALPHA;
    const WEBGL2_BLEND_SRC_RGB = response.WEBGL2_BLEND_SRC_RGB;
    const WEBGL2_COLOR_CLEAR_VALUE = response.WEBGL2_COLOR_CLEAR_VALUE;
    const WEBGL2_COLOR_WRITEMASK = response.WEBGL2_COLOR_WRITEMASK;
    const WEBGL2_COMPRESSED_TEXTURE_FORMATS = new Uint32Array();
    const WEBGL2_CULL_FACE = response.WEBGL2_CULL_FACE;
    const WEBGL2_CULL_FACE_MODE = response.WEBGL2_CULL_FACE_MODE;
    const WEBGL2_CURRENT_PROGRAM = response.WEBGL2_CURRENT_PROGRAM;
    const WEBGL2_DEPTH_CLEAR_VALUE = response.WEBGL2_DEPTH_CLEAR_VALUE;
    const WEBGL2_DEPTH_FUNC = response.WEBGL2_DEPTH_FUNC;
    const WEBGL2_DEPTH_RANGE = response.WEBGL2_DEPTH_RANGE;
    const WEBGL2_DEPTH_TEST = response.WEBGL2_DEPTH_TEST;
    const WEBGL2_DEPTH_WRITEMASK = response.WEBGL2_DEPTH_WRITEMASK;
    const WEBGL2_DITHER = response.WEBGL2_DITHER;
    const WEBGL2_ELEMENT_ARRAY_BUFFER_BINDING = response.WEBGL2_ELEMENT_ARRAY_BUFFER_BINDING;
    const WEBGL2_FRAMEBUFFER_BINDING = response.WEBGL2_FRAMEBUFFER_BINDING;
    const WEBGL2_FRONT_FACE = response.WEBGL2_FRONT_FACE;
    const WEBGL2_GENERATE_MIPMAP_HINT = response.WEBGL2_GENERATE_MIPMAP_HINT;
    const WEBGL2_LINE_WIDTH = response.WEBGL2_LINE_WIDTH;
    const WEBGL2_PACK_ALIGNMENT = response.WEBGL2_PACK_ALIGNMENT;
    const WEBGL2_POLYGON_OFFSET_FACTOR = response.WEBGL2_POLYGON_OFFSET_FACTOR;
    const WEBGL2_POLYGON_OFFSET_FILL = response.WEBGL2_POLYGON_OFFSET_FILL;
    const WEBGL2_POLYGON_OFFSET_UNITS = response.WEBGL2_POLYGON_OFFSET_UNITS;
    const WEBGL2_RENDERBUFFER_BINDING = response.WEBGL2_RENDERBUFFER_BINDING;
    const WEBGL2_SAMPLE_BUFFERS = response.WEBGL2_SAMPLE_BUFFERS;
    const WEBGL2_SAMPLE_COVERAGE_INVERT = response.WEBGL2_SAMPLE_COVERAGE_INVERT;
    const WEBGL2_SAMPLE_COVERAGE_VALUE = response.WEBGL2_SAMPLE_COVERAGE_VALUE;
    const WEBGL2_SAMPLES = response.WEBGL2_SAMPLES;
    const WEBGL2_SCISSOR_BOX = new Int32Array([0, 0, 300, 150]);
    const WEBGL2_SCISSOR_TEST = false;
    const WEBGL2_STENCIL_BACK_FAIL = response.WEBGL2_STENCIL_BACK_FAIL;
    const WEBGL2_STENCIL_BACK_FUNC = response.WEBGL2_STENCIL_BACK_FUNC;
    const WEBGL2_STENCIL_BACK_PASS_DEPTH_FAIL = response.WEBGL2_STENCIL_BACK_PASS_DEPTH_FAIL;
    const WEBGL2_STENCIL_BACK_PASS_DEPTH_PASS = response.WEBGL2_STENCIL_BACK_PASS_DEPTH_PASS;
    const WEBGL2_STENCIL_BACK_REF = response.WEBGL2_STENCIL_BACK_REF;
    const WEBGL2_STENCIL_BACK_VALUE_MASK = response.WEBGL2_STENCIL_BACK_VALUE_MASK;
    const WEBGL2_STENCIL_BACK_WRITEMASK = response.WEBGL2_STENCIL_BACK_WRITEMASK;
    const WEBGL2_STENCIL_CLEAR_VALUE = response.WEBGL2_STENCIL_CLEAR_VALUE;
    const WEBGL2_STENCIL_FAIL = response.WEBGL2_STENCIL_FAIL;
    const WEBGL2_STENCIL_FUNC = response.WEBGL2_STENCIL_FUNC;
    const WEBGL2_STENCIL_PASS_DEPTH_FAIL = response.WEBGL2_STENCIL_PASS_DEPTH_FAIL;
    const WEBGL2_STENCIL_PASS_DEPTH_PASS = response.WEBGL2_STENCIL_PASS_DEPTH_PASS;
    const WEBGL2_STENCIL_REF = response.WEBGL2_STENCIL_REF;
    const WEBGL2_STENCIL_TEST = response.WEBGL2_STENCIL_TEST;
    const WEBGL2_STENCIL_VALUE_MASK = response.WEBGL2_STENCIL_VALUE_MASK;
    const WEBGL2_STENCIL_WRITEMASK = response.WEBGL2_STENCIL_WRITEMASK;
    const WEBGL2_SUBPIXEL_BITS = response.WEBGL2_SUBPIXEL_BITS;
    const WEBGL2_TEXTURE_BINDING_2D = response.WEBGL2_TEXTURE_BINDING_2D;
    const WEBGL2_TEXTURE_BINDING_CUBE_MAP = response.WEBGL2_TEXTURE_BINDING_CUBE_MAP;
    const WEBGL2_UNPACK_ALIGNMENT = response.WEBGL2_UNPACK_ALIGNMENT;
    const WEBGL2_UNPACK_COLORSPACE_CONVERSION_WEBGL = response.WEBGL2_UNPACK_COLORSPACE_CONVERSION_WEBGL;
    const WEBGL2_UNPACK_FLIP_Y_WEBGL = response.WEBGL2_UNPACK_FLIP_Y_WEBGL;
    const WEBGL2_UNPACK_PREMULTIPLY_ALPHA_WEBGL = response.WEBGL2_UNPACK_PREMULTIPLY_ALPHA_WEBGL;
    const WEBGL2_VIEWPORT = new Int32Array([0, 0, 300, 150]);

//----

    const WEBGL1_blueBits = response.WEBGL1_blueBits;
    const WEBGL1_greenBits = response.WEBGL1_greenBits;
    const WEBGL1_alphaBits = response.WEBGL1_alphaBits;
    const WEBGL1_redBits = response.WEBGL1_redBits;
    const WEBGL1_stencilBits = response.WEBGL1_stencilBits;
    const WEBGL1_depthBits = response.WEBGL1_depthBits;
    const WEBGL1_maxCombinedTextureImageUnits = response.WEBGL1_maxCombinedTextureImageUnits;
    const WEBGL1_maxCubeMapTextureSize = response.WEBGL1_maxCubeMapTextureSize;
    const WEBGL1_maxFragmentUniformVectors = response.WEBGL1_maxFragmentUniformVectors;
    const WEBGL1_maxRenderBufferSize = response.WEBGL1_maxRenderBufferSize;
    const WEBGL1_maxTextureImageUnits = response.WEBGL1_maxTextureImageUnits;
    const WEBGL1_maxTextureSize = response.WEBGL1_maxTextureSize;
    const WEBGL1_maxVaryingVectors = response.WEBGL1_maxVaryingVectors;
    const WEBGL1_maxVertexTextureImageUnits = response.WEBGL1_maxVertexTextureImageUnits;
    const WEBGL1_maxVertexattribs = response.WEBGL1_maxVertexattribs;
    const WEBGL1_maxVertexuniformvectors = response.WEBGL1_maxVertexuniformvectors;
    const WEBGL1_maxTextureMaxAnisotropyExt = response.WEBGL1_maxTextureMaxAnisotropyExt;
    const WEBGL1_maxViewportDims = response.WEBGL1_maxViewportDims;
    const WEBGL1_aliasedLineWidthRange = response.WEBGL1_aliasedLineWidthRange;
    const WEBGL1_aliasedPointSizeRange = response.WEBGL1_aliasedPointSizeRange;
    const WEBGL1_shadinglanguageversion = response.WEBGL1_shadinglanguageversion;
    const WEBGL1_unmaskedRendererWebgl = response.WEBGL1_unmaskedRendererWebgl;
    const WEBGL1_unmaskedVendorWebgl = response.WEBGL1_unmaskedVendorWebgl;
    const WEBGL1_webglRenderer = response.WEBGL1_webglRenderer;
    const WEBGL1_webglVendor = response.WEBGL1_webglVendor;
    const WEBGL1_glVersion = response.WEBGL1_glVersion;
    const WEBGL1_ARRAY_BUFFER_BINDING = response.WEBGL1_ARRAY_BUFFER_BINDING;
    const WEBGL1_ACTIVE_TEXTURE = response.WEBGL1_ACTIVE_TEXTURE;
    const WEBGL1_BLEND = response.WEBGL1_BLEND;
    const WEBGL1_BLEND_COLOR = response.WEBGL1_BLEND_COLOR;
    const WEBGL1_BLEND_DST_ALPHA = response.WEBGL1_BLEND_DST_ALPHA;
    const WEBGL1_BLEND_DST_RGB = response.WEBGL1_BLEND_DST_RGB;
    const WEBGL1_BLEND_EQUATION_ALPHA = response.WEBGL1_BLEND_EQUATION_ALPHA;
    const WEBGL1_BLEND_EQUATION_RGB = response.WEBGL1_BLEND_EQUATION_RGB;
    const WEBGL1_BLEND_SRC_ALPHA = response.WEBGL1_BLEND_SRC_ALPHA;
    const WEBGL1_BLEND_SRC_RGB = response.WEBGL1_BLEND_SRC_RGB;
    const WEBGL1_COLOR_CLEAR_VALUE = response.WEBGL1_COLOR_CLEAR_VALUE;
    const WEBGL1_COLOR_WRITEMASK = response.WEBGL1_COLOR_WRITEMASK;
    const WEBGL1_CULL_FACE = response.WEBGL1_CULL_FACE;
    const WEBGL1_CULL_FACE_MODE = response.WEBGL1_CULL_FACE_MODE;
    const WEBGL1_CURRENT_PROGRAM = response.WEBGL1_CURRENT_PROGRAM;
    const WEBGL1_DEPTH_CLEAR_VALUE = response.WEBGL1_DEPTH_CLEAR_VALUE;
    const WEBGL1_DEPTH_FUNC = response.WEBGL1_DEPTH_FUNC;
    const WEBGL1_DEPTH_RANGE = response.WEBGL1_DEPTH_RANGE;
    const WEBGL1_DEPTH_TEST = response.WEBGL1_DEPTH_TEST;
    const WEBGL1_DEPTH_WRITEMASK = response.WEBGL1_DEPTH_WRITEMASK;
    const WEBGL1_DITHER = response.WEBGL1_DITHER;
    const WEBGL1_ELEMENT_ARRAY_BUFFER_BINDING = response.WEBGL1_ELEMENT_ARRAY_BUFFER_BINDING;
    const WEBGL1_FRAMEBUFFER_BINDING = response.WEBGL1_FRAMEBUFFER_BINDING;
    const WEBGL1_FRONT_FACE = response.WEBGL1_FRONT_FACE;
    const WEBGL1_GENERATE_MIPMAP_HINT = response.WEBGL1_GENERATE_MIPMAP_HINT;
    const WEBGL1_LINE_WIDTH = response.WEBGL1_LINE_WIDTH;
    const WEBGL1_PACK_ALIGNMENT = response.WEBGL1_PACK_ALIGNMENT;
    const WEBGL1_POLYGON_OFFSET_FACTOR = response.WEBGL1_POLYGON_OFFSET_FACTOR;
    const WEBGL1_POLYGON_OFFSET_FILL = response.WEBGL1_POLYGON_OFFSET_FILL;
    const WEBGL1_POLYGON_OFFSET_UNITS = response.WEBGL1_POLYGON_OFFSET_UNITS;
    const WEBGL1_RENDERBUFFER_BINDING = response.WEBGL1_RENDERBUFFER_BINDING;
    const WEBGL1_SAMPLE_BUFFERS = response.WEBGL1_SAMPLE_BUFFERS;
    const WEBGL1_SAMPLE_COVERAGE_INVERT = response.WEBGL1_SAMPLE_COVERAGE_INVERT;
    const WEBGL1_SAMPLE_COVERAGE_VALUE = response.WEBGL1_SAMPLE_COVERAGE_VALUE;
    const WEBGL1_SAMPLES = response.WEBGL1_SAMPLES;
    const WEBGL1_STENCIL_BACK_FAIL = response.WEBGL1_STENCIL_BACK_FAIL;
    const WEBGL1_STENCIL_BACK_FUNC = response.WEBGL1_STENCIL_BACK_FUNC;
    const WEBGL1_STENCIL_BACK_PASS_DEPTH_FAIL = response.WEBGL1_STENCIL_BACK_PASS_DEPTH_FAIL;
    const WEBGL1_STENCIL_BACK_PASS_DEPTH_PASS = response.WEBGL1_STENCIL_BACK_PASS_DEPTH_PASS;
    const WEBGL1_STENCIL_BACK_REF = response.WEBGL1_STENCIL_BACK_REF;
    const WEBGL1_STENCIL_BACK_VALUE_MASK = response.WEBGL1_STENCIL_BACK_VALUE_MASK;
    const WEBGL1_STENCIL_BACK_WRITEMASK = response.WEBGL1_STENCIL_BACK_WRITEMASK;
    const WEBGL1_STENCIL_CLEAR_VALUE = response.WEBGL1_STENCIL_CLEAR_VALUE;
    const WEBGL1_STENCIL_FAIL = response.WEBGL1_STENCIL_FAIL;
    const WEBGL1_STENCIL_FUNC = response.WEBGL1_STENCIL_FUNC;
    const WEBGL1_STENCIL_PASS_DEPTH_FAIL = response.WEBGL1_STENCIL_PASS_DEPTH_FAIL;
    const WEBGL1_STENCIL_PASS_DEPTH_PASS = response.WEBGL1_STENCIL_PASS_DEPTH_PASS;
    const WEBGL1_STENCIL_REF = response.WEBGL1_STENCIL_REF;
    const WEBGL1_STENCIL_TEST = response.WEBGL1_STENCIL_TEST;
    const WEBGL1_STENCIL_VALUE_MASK = response.WEBGL1_STENCIL_VALUE_MASK;
    const WEBGL1_STENCIL_WRITEMASK = response.WEBGL1_STENCIL_WRITEMASK;
    const WEBGL1_SUBPIXEL_BITS = response.WEBGL1_SUBPIXEL_BITS;
    const WEBGL1_TEXTURE_BINDING_2D = response.WEBGL1_TEXTURE_BINDING_2D;
    const WEBGL1_TEXTURE_BINDING_CUBE_MAP = response.WEBGL1_TEXTURE_BINDING_CUBE_MAP;
    const WEBGL1_UNPACK_ALIGNMENT = response.WEBGL1_UNPACK_ALIGNMENT;
    const WEBGL1_UNPACK_COLORSPACE_CONVERSION_WEBGL = response.WEBGL1_UNPACK_COLORSPACE_CONVERSION_WEBGL;
    const WEBGL1_UNPACK_FLIP_Y_WEBGL = response.WEBGL1_UNPACK_FLIP_Y_WEBGL;
    const WEBGL1_UNPACK_PREMULTIPLY_ALPHA_WEBGL = response.WEBGL1_UNPACK_PREMULTIPLY_ALPHA_WEBGL;
    const WEBGL1_COMPRESSED_TEXTURE_FORMATS = new Uint32Array();
    const WEBGL1_SCISSOR_BOX = new Int32Array([0, 0, 300, 150]);
    const WEBGL1_SCISSOR_TEST = false;
    const WEBGL1_VIEWPORT = new Int32Array([0, 0, 300, 150]);


    const webglSupportExtentions = response.webglFloatPrecision;
    const webgl1SupportExtentions = response.WEBGL1_Extentions;
    const webgl2SupportExtentions = response.WEBGL2_Extentions;

    var originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
    var originalToBlob = HTMLCanvasElement.prototype.toBlob;
    var originalMozGetAsFile = HTMLCanvasElement.prototype.mozGetAsFile;
    var originalGetContext = HTMLCanvasElement.prototype.getContext;
    var originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
    var originalReadPixels = WebGLRenderingContext.prototype.readPixels;
    var originalReadPixelsTwo = WebGL2RenderingContext.prototype.readPixels;
    var original_WebGL2_getParameter =  WebGL2RenderingContext.prototype.getParameter;
    var original_WebGL_getParameter = WebGLRenderingContext.prototype.getParameter;

   


    function randomBoolean() {
        return randomNumber(0, 2) ? true : false;
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
   
   function fakeImageData(image) {
       Math.seedrandom(seed);             
       for (var i = 0; i < image.data.length; i++) {
           image.data[i] += (randomBoolean() ? 1 : -1);
       }
       return image;
   }



   
   function loseContext() {
   };

   function restoreContext() {
   };

   function drawBuffersWEBGL() {
   };

   var extensions = {
       'OES_texture_float': {},
       'OES_texture_half_float': {
           'HALF_FLOAT_OES': 36193
       },
       'WEBGL_lose_context': {
           loseContext,
           restoreContext
       },
       'OES_standard_derivatives': {
           'FRAGMENT_SHADER_DERIVATIVE_HINT_OES': 35723
       },
       'OES_vertex_array_object': {
           'VERTEX_ARRAY_BINDING_OES': 34229
       },
       'WEBGL_debug_renderer_info': {
           'UNMASKED_VENDOR_WEBGL': 37445,
           'UNMASKED_RENDERER_WEBGL': 37446
       },
       'WEBGL_debug_shaders': {},
       'WEBGL_depth_texture': {
           'UNSIGNED_INT_24_8_WEBGL': 34042
       },
       'OES_element_index_uint': {},
       'EXT_texture_filter_anisotropic': {
           'MAX_TEXTURE_MAX_ANISOTROPY_EXT': 34047,
           'TEXTURE_MAX_ANISOTROPY_EXT': 34046
       },
       'EXT_frag_depth': {},
       'WEBGL_draw_buffers': {
           'MAX_DRAW_BUFFERS_WEBGL': 34852,
           'MAX_COLOR_ATTACHMENTS_WEBGL': 36063,
           'DRAW_BUFFER9_WEBGL': 34862,
           'DRAW_BUFFER8_WEBGL': 34861,
           'DRAW_BUFFER7_WEBGL': 34860,
           'DRAW_BUFFER6_WEBGL': 34859,
           'DRAW_BUFFER5_WEBGL': 34858,
           'DRAW_BUFFER4_WEBGL': 34857,
           'DRAW_BUFFER3_WEBGL': 34856,
           'DRAW_BUFFER2_WEBGL': 34855,
           'DRAW_BUFFER15_WEBGL': 34868,
           'DRAW_BUFFER14_WEBGL': 34867,
           'DRAW_BUFFER13_WEBGL': 34866,
           'DRAW_BUFFER12_WEBGL': 34865,
           'DRAW_BUFFER11_WEBGL': 34864,
           'DRAW_BUFFER10_WEBGL': 34863,
           'DRAW_BUFFER1_WEBGL': 34854,
           'DRAW_BUFFER0_WEBGL': 34853,
           'COLOR_ATTACHMENT9_WEBGL': 36073,
           'COLOR_ATTACHMENT8_WEBGL': 36072,
           'COLOR_ATTACHMENT7_WEBGL': 36071,
           'COLOR_ATTACHMENT6_WEBGL': 36070,
           'COLOR_ATTACHMENT5_WEBGL': 36069,
           'COLOR_ATTACHMENT4_WEBGL': 36068,
           'COLOR_ATTACHMENT3_WEBGL': 36067,
           'COLOR_ATTACHMENT2_WEBGL': 36066,
           'COLOR_ATTACHMENT15_WEBGL': 36079,
           'COLOR_ATTACHMENT14_WEBGL': 36078,
           'COLOR_ATTACHMENT13_WEBGL': 36077,
           'COLOR_ATTACHMENT12_WEBGL': 36076,
           'COLOR_ATTACHMENT11_WEBGL': 36075,
           'COLOR_ATTACHMENT10_WEBGL': 36074,
           'COLOR_ATTACHMENT1_WEBGL': 36065,
           'COLOR_ATTACHMENT0_WEBGL': 36064,
           drawBuffersWEBGL
       },
       'ANGLE_instanced_arrays': {
           'VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE': 35070
       },
       'OES_texture_float_linear': {},
       'OES_texture_half_float_linear': {},
       'EXT_blend_minmax': {},
       'EXT_shader_texture_lod': {},
       'WEBGL_compressed_texture_atc': null,
       'WEBGL_compressed_texture_pvrtc': {
           'COMPRESSED_RGB_PVRTC_4BPPV1_IMG': 35840,
           'COMPRESSED_RGBA_PVRTC_4BPPV1_IMG': 35842,
           'COMPRESSED_RGB_PVRTC_2BPPV1_IMG': 35841,
           'COMPRESSED_RGBA_PVRTC_2BPPV1_IMG': 35843
       },
       'EXT_color_buffer_half_float': {},
       'WEBGL_color_buffer_float': {
           'RGBA32F_EXT': 34836,
           'RGB32F_EXT': 34837,
           'FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT': 33297,
           'UNSIGNED_NORMALIZED_EXT': 35863
       },
       'EXT_sRGB': {
           'SRGB_EXT': 35904,
           'SRGB_ALPHA_EXT': 35906,
           'SRGB8_ALPHA8_EXT': 35907,
           'FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT': 33296
       },
       'WEBGL_compressed_texture_etc1': {
           'COMPRESSED_RGB_ETC1_WEBGL': 36196
       },
       'WEBGL_compressed_texture_astc': {
           'COMPRESSED_RGB_ATC_WEBGL': 35986,
           'COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL': 35986,
           'COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL': 34798
       },
       'WEBGL_compressed_texture_etc': {
           'COMPRESSED_R11_EAC': 37488,
           'COMPRESSED_SIGNED_R11_EAC': 37489,
           'COMPRESSED_RG11_EAC': 37490,
           'COMPRESSED_SIGNED_RG11_EAC': 37491,
           'COMPRESSED_RGB8_ETC2': 37492,
           'COMPRESSED_RGBA8_ETC2_EAC': 37493,
           'COMPRESSED_SRGB8_ETC2': 37494,
           'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC': 37495,
           'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2': 37496,
           'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2': 37497
       },
       'WEBGL_compressed_texture_s3tc': {
           'MAX_TEXTURE_MAX_ANISOTROPY_EXT': 34047,
           'TEXTURE_MAX_ANISOTROPY_EXT': 34046
       },
       'WEBGL_compressed_texture_s3tc_srgb': {},
   };


    var enabledExtensionsVar = webglSupportExtentions.slice(1, -1);
    
    if (enabledExtensionsVar.indexOf(',') > -1)
    {
        var enabledExtensionsArray = enabledExtensionsVar.split(',');
    };
    
    if (enabledExtensionsVar.indexOf(', ') > -1)
    {
        var enabledExtensionsArray = enabledExtensionsVar.split(', ');
    };

    const enabledExtensions = enabledExtensionsArray;

   let _extensions = {}
   enabledExtensions.forEach(function (v) {
       _extensions[v] = extensions[v];
   })

    var WEBGL1_enabledExtensionsVar = webgl1SupportExtentions.slice(1, -1);
    
    if (WEBGL1_enabledExtensionsVar.indexOf(',') > -1)
    {
        var WEBGL1_enabledExtensionsArray = WEBGL1_enabledExtensionsVar.split(',');
    };
    
    if (WEBGL1_enabledExtensionsVar.indexOf(', ') > -1)
    {
        var WEBGL1_enabledExtensionsArray = WEBGL1_enabledExtensionsVar.split(', ');
    };

    const WEBGL1_enabledExtensions = WEBGL1_enabledExtensionsArray;

   let WEBGL1__extensions = {}
   WEBGL1_enabledExtensions.forEach(function (v) {
       WEBGL1__extensions[v] = extensions[v];
   })
   
   function fakeCanvas(canvas) {

       if (IS_WEBGL2) {
          var ctx = HTMLCanvasElement.prototype.getContext.call(canvas, "2d") ||
             HTMLCanvasElement.prototype.getContext.call(canvas, "webgl") ||
             HTMLCanvasElement.prototype.getContext.call(canvas, "experimental-webgl") ||
             HTMLCanvasElement.prototype.getContext.call(canvas, "webgl2") ||
             HTMLCanvasElement.prototype.getContext.call(canvas, "experimental-webgl2");
        } else {
          var ctx = HTMLCanvasElement.prototype.getContext.call(canvas, "2d") ||
             HTMLCanvasElement.prototype.getContext.call(canvas, "webgl") ||
             HTMLCanvasElement.prototype.getContext.call(canvas, "experimental-webgl");          
        }

       var image;

       
       if (ctx instanceof CanvasRenderingContext2D) {
           image = originalGetImageData.call(ctx, 0, 0, canvas.width, canvas.height);
       } else if (ctx instanceof WebGLRenderingContext || ctx instanceof WebGL2RenderingContext) {
           image = new ImageData(canvas.width, canvas.height);
           originalReadPixels.call(ctx, 0, 0, canvas.width, canvas.height, ctx.RGBA, ctx.UNSIGNED_BYTE, image.data);
       } else if (ctx instanceof ImageBitmapRenderingContext) {
           
           
       }

       
       var fakeImage = fakeImageData(image);

       
       var fakeCanvas = canvas.cloneNode(true);

       
       var fakeCtx = fakeCanvas.getContext("2d");

       
       fakeCtx.putImageData(fakeImage, 0, 0);

       return fakeCanvas;
   }



if (IS_WEBGL2) {
WebGL2RenderingContext.prototype.getParameter = function getParameter() {
    var name = arguments[0];
    switch (name) {
        case 37445: return unmaskedvendorwebgl;
        break;
        case 37446: return unmaskedrendererwebgl;
        break;
        case 7937: return webglrenderer;
        break;
        case 7936: return webglvendor;
        break;
        case 35724: return shadinglanguageversion;
        break;
        case 7938: return glversion;
        break;
        case 33901: return new Float32Array(aliasedpointsizerange.replace("[", "").replace("]", "").split(","));
        break;
        case 33902: return new Float32Array(aliasedlinewidthrange.replace("[", "").replace("]", "").split(","));
        break;
        case 3413: return Number(alphabits);
        break;
        case 3412: return Number(bluebits);
        break;
        case 3411: return Number(greenbits);
        break;
        case 3410: return Number(redbits);
        break;
        case 3415: return Number(stencilbits);
        break;
        case 3414: return Number(depthbits);
        break;
        case 34047: return Number(maxtexturemaxanisotropyext);
        break;
        case 34921: return Number(maxvertexattribs);
        break;
        case 35661: return Number(maxcombinedtextureimageunits);
        break;
        case 34076: return Number(maxcubemaptexturesize);
        break;
        case 34024: return Number(maxrenderbuffersize);
        break;
        case 3379: return Number(maxtexturesize);
        break;
        case 36349: return Number(maxfragmentuniformvectors);
        break;
        case 36347: return Number(maxvertexuniformvectors);
        break;
        case 34930: return Number(maxtextureimageunits);
        break;
        case 36348: return Number(maxvaryingvectors);
        break;
        case 35660: return Number(maxvertextextureimageunits);
        break;
        case 3386: return new Int32Array(maxviewportdims.replace("[", "").replace("]", "").split(","));
        break;
        case 35658: return WEBGL2_MAX_VERTEX_UNIFORM_COMPONENTS;
        break;
        case 35371: return WEBGL2_MAX_VERTEX_UNIFORM_BLOCKS;
        break;
        case 37154: return WEBGL2_MAX_VERTEX_OUTPUT_COMPONENTS;
        break;
        case 35659: return WEBGL2_MAX_VARYING_COMPONENTS;
        break;
        case 35978: return WEBGL2_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS;
        break;
        case 35979: return WEBGL2_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS;
        break;
        case 35968: return WEBGL2_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS;
        break;
        case 35657: return WEBGL2_MAX_FRAGMENT_UNIFORM_COMPONENTS;
        break;
        case 35373: return WEBGL2_MAX_FRAGMENT_UNIFORM_BLOCKS;
        break;
        case 37157: return WEBGL2_MAX_FRAGMENT_INPUT_COMPONENTS;
        break;
        case 35076: return WEBGL2_MIN_PROGRAM_TEXEL_OFFSET;
        break;
        case 35077: return WEBGL2_MAX_PROGRAM_TEXEL_OFFSET;
        break;
        case 34852: return WEBGL2_MAX_DRAW_BUFFERS;
        break;
        case 36063: return WEBGL2_MAX_COLOR_ATTACHMENTS;
        break;
        case 36183: return WEBGL2_MAX_SAMPLES;
        break;
        case 32883: return WEBGL2_MAX_3D_TEXTURE_SIZE;
        break;
        case 35071: return WEBGL2_MAX_ARRAY_TEXTURE_LAYERS;
        break;
        case 34045: return WEBGL2_MAX_TEXTURE_LOD_BIAS;
        break;
        case 35375: return WEBGL2_MAX_UNIFORM_BUFFER_BINDINGS;
        break;
        case 35376: return WEBGL2_MAX_UNIFORM_BLOCK_SIZE;
        break;
        case 35380: return WEBGL2_UNIFORM_BUFFER_OFFSET_ALIGNMENT;
        break;
        case 35374: return WEBGL2_MAX_COMBINED_UNIFORM_BLOCKS;
        break;
        case 35377: return WEBGL2_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS;
        break;
        case 35379: return WEBGL2_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS;
        break;
        //tut
        case 34964: return WEBGL2_ARRAY_BUFFER_BINDING;
        break;
        case 34016: return WEBGL2_ACTIVE_TEXTURE;
        break;
        case 3042: return WEBGL2_BLEND;
        break;
        case 32773: return new Float32Array(WEBGL2_BLEND_COLOR.replace("[", "").replace("]", "").split(","));
        break;
        case 32970: return WEBGL2_BLEND_DST_ALPHA;
        break;
        case 32968: return WEBGL2_BLEND_DST_RGB;
        break;
        case 34877: return WEBGL2_BLEND_EQUATION_ALPHA;
        break;
        case 32777: return WEBGL2_BLEND_EQUATION_RGB;
        break;
        case 32971: return WEBGL2_BLEND_SRC_ALPHA;
        break;
        case 32969: return WEBGL2_BLEND_SRC_RGB;
        break;
        case 3106: return WEBGL2_COLOR_CLEAR_VALUE;
        break;
        case 3107: return WEBGL2_COLOR_WRITEMASK;
        break;
        case 34467: return WEBGL2_COMPRESSED_TEXTURE_FORMATS;
        break;
        case 2884: return WEBGL2_CULL_FACE;
        break;
        case 2885: return WEBGL2_CULL_FACE_MODE;
        break;
        case 35725: return WEBGL2_CURRENT_PROGRAM;
        break;
        case 2931: return WEBGL2_DEPTH_CLEAR_VALUE;
        break;
        case 2932: return WEBGL2_DEPTH_FUNC;
        break;
        case 2928: return WEBGL2_DEPTH_RANGE;
        break;
        case 2929: return WEBGL2_DEPTH_TEST;
        break;
        case 2930: return WEBGL2_DEPTH_WRITEMASK;
        break;
        case 3402: return WEBGL2_DITHER;
        break;
        case 34965: return WEBGL2_ELEMENT_ARRAY_BUFFER_BINDING;
        break;
        case 36006: return WEBGL2_FRAMEBUFFER_BINDING;
        break;
        case 2886: return WEBGL2_FRONT_FACE;
        break;
        case 33170: return WEBGL2_GENERATE_MIPMAP_HINT;
        break;
        case 2849: return WEBGL2_LINE_WIDTH;
        break;
        case 3333: return WEBGL2_PACK_ALIGNMENT;
        break;
        case 32824: return WEBGL2_POLYGON_OFFSET_FACTOR;
        break;
        case 32823: return WEBGL2_POLYGON_OFFSET_FILL;
        break;
        case 10752: return WEBGL2_POLYGON_OFFSET_UNITS;
        break;
        case 36007: return WEBGL2_RENDERBUFFER_BINDING;
        break;
        case 32936: return WEBGL2_SAMPLE_BUFFERS;
        break;
        case 32939: return WEBGL2_SAMPLE_COVERAGE_INVERT;
        break;
        case 32938: return WEBGL2_SAMPLE_COVERAGE_VALUE;
        break;
        case 32937: return WEBGL2_SAMPLES;
        break;
        case 3088: return WEBGL2_SCISSOR_BOX;
        break;
        case 3089: return WEBGL2_SCISSOR_TEST;
        break;
        case 34817: return WEBGL2_STENCIL_BACK_FAIL;
        break;
        case 34816: return WEBGL2_STENCIL_BACK_FUNC;
        break;
        case 34818: return WEBGL2_STENCIL_BACK_PASS_DEPTH_FAIL;
        break;
        case 34819: return WEBGL2_STENCIL_BACK_PASS_DEPTH_PASS;
        break;
        case 36003: return WEBGL2_STENCIL_BACK_REF;
        break;
        case 36004: return WEBGL2_STENCIL_BACK_VALUE_MASK;
        break;
        case 36005: return WEBGL2_STENCIL_BACK_WRITEMASK;
        break;
        case 2961: return WEBGL2_STENCIL_CLEAR_VALUE;
        break;
        case 2964: return WEBGL2_STENCIL_FAIL;
        break;
        case 2962: return WEBGL2_STENCIL_FUNC;
        break;
        case 2965: return WEBGL2_STENCIL_PASS_DEPTH_FAIL;
        break;
        case 2966: return WEBGL2_STENCIL_PASS_DEPTH_PASS;
        break;
        case 2967: return WEBGL2_STENCIL_REF;
        break;
        case 2960: return WEBGL2_STENCIL_TEST;
        break;
        case 2963: return WEBGL2_STENCIL_VALUE_MASK;
        break;
        case 2968: return WEBGL2_STENCIL_WRITEMASK;
        break;
        case 3408: return WEBGL2_SUBPIXEL_BITS;
        break;
        case 32873: return WEBGL2_TEXTURE_BINDING_2D;
        break;
        case 34068: return WEBGL2_TEXTURE_BINDING_CUBE_MAP;
        break;
        case 3317: return WEBGL2_UNPACK_ALIGNMENT;
        break;
        case 37443: return WEBGL2_UNPACK_COLORSPACE_CONVERSION_WEBGL;
        break;
        case 37440: return WEBGL2_UNPACK_FLIP_Y_WEBGL;
        break;
        case 37441: return WEBGL2_UNPACK_PREMULTIPLY_ALPHA_WEBGL;
        break;
        case 2978: return WEBGL2_VIEWPORT;
        break;
        default: return null;
        break;
    }

}

       
       WebGL2RenderingContext.prototype.getSupportedExtensions = function getSupportedExtensions() {


           try {
               var availableExtensions = Object.keys(_extensions);
               return availableExtensions;
           } catch (a) {
               
               return Object.keys(extensions);
           }
       }

   } else {
       
       
       HTMLCanvasElement.prototype.getContext = function getContext (type, attrs) {


           if ((type == 'webgl2') && (!IS_WEBGL2)) {
               return null;

           }

           return originalGetContext.call(this, type, attrs);
       };

   }


WebGLRenderingContext.prototype.getParameter = function getParameter() {
    var name = arguments[0];
    switch (name) {
        case 37445: return WEBGL1_unmaskedVendorWebgl;
        break;
        case 37446: return WEBGL1_unmaskedRendererWebgl;
        break;
        case 7937: return WEBGL1_webglRenderer;
        break;
        case 7936: return WEBGL1_webglVendor;
        break;
        case 35724: return WEBGL1_shadinglanguageversion;
        break;
        case 7938: return WEBGL1_glVersion;
        break;
        case 33901: return new Float32Array(WEBGL1_aliasedPointSizeRange.replace("[", "").replace("]", "").split(","));
        break;
        case 33902: return new Float32Array(WEBGL1_aliasedLineWidthRange.replace("[", "").replace("]", "").split(","));
        break;
        case 34852: return 8;
        break;
        case 3413: return Number(WEBGL1_alphaBits);
        break;
        case 3412: return Number(WEBGL1_blueBits);
        break;
        case 3411: return Number(WEBGL1_greenBits);
        break;
        case 3410: return Number(WEBGL1_redBits);
        break;
        case 3415: return Number(WEBGL1_stencilBits);
        break;
        case 3414: return Number(WEBGL1_depthBits);
        break;
        case 34047: return Number(WEBGL1_maxTextureMaxAnisotropyExt);
        break;
        case 34921: return Number(WEBGL1_maxVertexattribs);
        break;
        case 35661: return Number(WEBGL1_maxCombinedTextureImageUnits);
        break;
        case 34076: return Number(WEBGL1_maxCubeMapTextureSize);
        break;
        case 34024: return Number(WEBGL1_maxRenderBufferSize);
        break;
        case 3379: return Number(WEBGL1_maxTextureSize);
        break;
        case 36349: return Number(WEBGL1_maxFragmentUniformVectors);
        break;
        case 36347: return Number(WEBGL1_maxVertexuniformvectors);
        break;
        case 34930: return Number(WEBGL1_maxTextureImageUnits);
        break;
        case 36348: return Number(WEBGL1_maxVaryingVectors);
        break;
        case 35660: return Number(WEBGL1_maxVertexTextureImageUnits);
        break;
        case 3386: return new Int32Array(WEBGL1_maxViewportDims.replace("[", "").replace("]", "").split(","));
        break;
        //tut
        case 34964: return WEBGL1_ARRAY_BUFFER_BINDING;
        break;
        case 34016: return WEBGL1_ACTIVE_TEXTURE;
        break;
        case 3042: return WEBGL1_BLEND;
        break;
        case 32773: return new Float32Array(WEBGL1_BLEND_COLOR.replace("[", "").replace("]", "").split(","));
        break;
        case 32970: return WEBGL1_BLEND_DST_ALPHA;
        break;
        case 32968: return WEBGL1_BLEND_DST_RGB;
        break;
        case 34877: return WEBGL1_BLEND_EQUATION_ALPHA;
        break;
        case 32777: return WEBGL1_BLEND_EQUATION_RGB;
        break;
        case 32971: return WEBGL1_BLEND_SRC_ALPHA;
        break;
        case 32969: return WEBGL1_BLEND_SRC_RGB;
        break;
        case 3106: return WEBGL1_COLOR_CLEAR_VALUE;
        break;
        case 3107: return WEBGL1_COLOR_WRITEMASK;
        break;
        case 34467: return WEBGL1_COMPRESSED_TEXTURE_FORMATS;
        break;
        case 2884: return WEBGL1_CULL_FACE;
        break;
        case 2885: return WEBGL1_CULL_FACE_MODE;
        break;
        case 35725: return WEBGL1_CURRENT_PROGRAM;
        break;
        case 2931: return WEBGL1_DEPTH_CLEAR_VALUE;
        break;
        case 2932: return WEBGL1_DEPTH_FUNC;
        break;
        case 2928: return WEBGL1_DEPTH_RANGE;
        break;
        case 2929: return WEBGL1_DEPTH_TEST;
        break;
        case 2930: return WEBGL1_DEPTH_WRITEMASK;
        break;
        case 3402: return WEBGL1_DITHER;
        break;
        case 34965: return WEBGL1_ELEMENT_ARRAY_BUFFER_BINDING;
        break;
        case 36006: return WEBGL1_FRAMEBUFFER_BINDING;
        break;
        case 2886: return WEBGL1_FRONT_FACE;
        break;
        case 33170: return WEBGL1_GENERATE_MIPMAP_HINT;
        break;
        case 2849: return WEBGL1_LINE_WIDTH;
        break;
        case 3333: return WEBGL1_PACK_ALIGNMENT;
        break;
        case 32824: return WEBGL1_POLYGON_OFFSET_FACTOR;
        break;
        case 32823: return WEBGL1_POLYGON_OFFSET_FILL;
        break;
        case 10752: return WEBGL1_POLYGON_OFFSET_UNITS;
        break;
        case 36007: return WEBGL1_RENDERBUFFER_BINDING;
        break;
        case 32936: return WEBGL1_SAMPLE_BUFFERS;
        break;
        case 32939: return WEBGL1_SAMPLE_COVERAGE_INVERT;
        break;
        case 32938: return WEBGL1_SAMPLE_COVERAGE_VALUE;
        break;
        case 32937: return WEBGL1_SAMPLES;
        break;
        case 3088: return WEBGL1_SCISSOR_BOX;
        break;
        case 3089: return WEBGL1_SCISSOR_TEST;
        break;
        case 34817: return WEBGL1_STENCIL_BACK_FAIL;
        break;
        case 34816: return WEBGL1_STENCIL_BACK_FUNC;
        break;
        case 34818: return WEBGL1_STENCIL_BACK_PASS_DEPTH_FAIL;
        break;
        case 34819: return WEBGL1_STENCIL_BACK_PASS_DEPTH_PASS;
        break;
        case 36003: return WEBGL1_STENCIL_BACK_REF;
        break;
        case 36004: return WEBGL1_STENCIL_BACK_VALUE_MASK;
        break;
        case 36005: return WEBGL1_STENCIL_BACK_WRITEMASK;
        break;
        case 2961: return WEBGL1_STENCIL_CLEAR_VALUE;
        break;
        case 2964: return WEBGL1_STENCIL_FAIL;
        break;
        case 2962: return WEBGL1_STENCIL_FUNC;
        break;
        case 2965: return WEBGL1_STENCIL_PASS_DEPTH_FAIL;
        break;
        case 2966: return WEBGL1_STENCIL_PASS_DEPTH_PASS;
        break;
        case 2967: return WEBGL1_STENCIL_REF;
        break;
        case 2960: return WEBGL1_STENCIL_TEST;
        break;
        case 2963: return WEBGL1_STENCIL_VALUE_MASK;
        break;
        case 2968: return WEBGL1_STENCIL_WRITEMASK;
        break;
        case 3408: return WEBGL1_SUBPIXEL_BITS;
        break;
        case 32873: return WEBGL1_TEXTURE_BINDING_2D;
        break;
        case 34068: return WEBGL1_TEXTURE_BINDING_CUBE_MAP;
        break;
        case 3317: return WEBGL1_UNPACK_ALIGNMENT;
        break;
        case 37443: return WEBGL1_UNPACK_COLORSPACE_CONVERSION_WEBGL;
        break;
        case 37440: return WEBGL1_UNPACK_FLIP_Y_WEBGL;
        break;
        case 37441: return WEBGL1_UNPACK_PREMULTIPLY_ALPHA_WEBGL;
        break;
        case 2978: return WEBGL1_VIEWPORT;
        break;
        default: return null;
        break;
    }
}

   HTMLCanvasElement.prototype.toBlob = function toBlob(callback, mimeType, qualityArgument) {


       var fake = fakeCanvas(this);

       return originalToBlob.call(fake, callback, mimeType, qualityArgument);
   };

   HTMLCanvasElement.prototype.mozGetAsFile = function mozGetAsFile(name, type) {



       var fake = fakeCanvas(this);

       return originalMozGetAsFile.call(fake, name, type);
   };

   WebGLRenderingContext.prototype.getSupportedExtensions = function getSupportedExtensions() {


       try {
           
           var availableExtensions = Object.keys(WEBGL1__extensions);
           
           return availableExtensions;
       } catch (a) {
           
           return Object.keys(WEBGL1_extensions);
       }
   }

    } + ')();';

if (JSON.parse(response) === null) {
  return;
} else {

    var script = document.createElement('script');
    script.textContent = `var webglResponseStr = '${response}'; \n ` + scriptCode;
    (document.head || document.documentElement).appendChild(script);
    script.remove();

        var inject=function(filePath,seed){
        var script=document.createElement('script');
        script.src=chrome.extension.getURL(filePath);
        script.onload = function(){
          this.remove();
        };
          (document.head||document.documentElement).appendChild(script);
        }

        inject("js/lib/seedrandom.js");
}
});


