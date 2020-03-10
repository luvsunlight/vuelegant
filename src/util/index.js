import {
	baseColorSet,
	baseSizeSet,
	baseStatusSet,
	baseProgressSet,
	baseShapeSet,
	baseDirectionSet,
	baseAlignSet,
	baseSpinSet,
	baseTheme,
	basePlacement
} from "./base"

const validatorFactory = function(name, lib) {
	name = function(value) {
		return oneOf(value, lib)
	}
	return name
}

const oneOf = function(value, array = []) {
	return array.indexOf(value) !== -1
}

const validColor = function(color) {
	return !color || oneOf(color, baseColorSet) || color.indexOf("#") !== -1
}

const validSize = validatorFactory("validSize", baseSizeSet)

const validStatus = validatorFactory("validStatus", baseStatusSet)

const validProgress = validatorFactory("validProgress", baseProgressSet)

const validShape = validatorFactory("validShape", baseShapeSet)

const validDirection = validatorFactory("validDirection", baseDirectionSet)

const validAlign = validatorFactory("validAlign", baseAlignSet)

const validSpin = validatorFactory("validSpin", baseSpinSet)

const validTheme = validatorFactory("validTheme", baseTheme)

const validPlacement = validatorFactory("validPlacement", basePlacement)

export {
	oneOf,
	validColor,
	validSize,
	validStatus,
	validProgress,
	validShape,
	validDirection,
	validAlign,
	validSpin,
	validTheme,
	basePlacement
}
